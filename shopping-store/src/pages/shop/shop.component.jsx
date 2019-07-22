import React from 'react';
import { connect } from 'react-redux';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const Shop = ({ collections }) => {
  
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <PreviewCollection key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(
  mapStateToProps,
  null
)(Shop);
