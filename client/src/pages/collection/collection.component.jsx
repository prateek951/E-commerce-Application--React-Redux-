import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';
// import { firestore } from '../../firebase/firebase.utils';
const CollectionPage = ({ collection }) => {
  // useEffect(() => {

  //   console.log('I am subscribing');
  //   const unsubscribeFromCollections = firestore.collection('collections').onSnapshot(snapshot => console.log(snapshot));

  //   return () => {
  //     // useEffect takes a callback which in turn can return a
  //     // new function and this new function is also known as the cleanup
  //     // function and this callback is called when the component unmounts.
  //     // This is the way how hooks replicate the lifecycle method componentWillUnmount
  //     console.log('I am unsubscribing');
  //     unsubscribeFromCollections();
  //   }
  // }, [])

  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};
export default connect(
  mapStateToProps,
  null
)(CollectionPage);
