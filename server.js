/**
 * Server for stripe backend
 */

const express = require('express');
const cors = require('cors');
const { INTERNAL_SERVER_ERROR, OK } = require('http-status-codes');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.post('/payment', (req, res) => {
  const {
    token: { id },
    amount
  } = req.body;
  const body = {
    source: id,
    amount,
    currency: 'usd'
  };
  // Make a stripe charge
  stripe.charges.create(
    body,
    (stripeErrorResponseObject, stripeSuccessResponseObject) => {
      if (stripeErrorResponseObject) {
        res
          .status(INTERNAL_SERVER_ERROR)
          .send({ error: stripeErrorResponseObject });
      } else {
        res.status(OK).send({ success: stripeSuccessResponseObject });
      }
    }
  );
});

app.listen(port, () => `Server running on port ${port} 🔥`);
