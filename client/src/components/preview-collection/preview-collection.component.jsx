/**
 * @component Preview Collection Component
 * which will house all of the collection items pertaining to
 * a specific collection
 *
 *
 */

import React from 'react';
import { withRouter } from 'react-router-dom';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './preview-collection.styles';
const PreviewCollection = ({ title, items, history, match, routeName }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default withRouter(PreviewCollection);
