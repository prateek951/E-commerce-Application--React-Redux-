import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
// import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// Make use of the container pattern

// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionPageContainer from '../collection/collection.container';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const Shop = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  console.log(match.path);
  // console.log(match.path);
  return (
    <div className="shop-page">
      <Suspense>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
