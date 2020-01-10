import React from 'react';
import PageTemplate from '../components/PageTemplate';
import PhotoContainer from '../containers/PhotoContainer';

const DetailPage = ({ match }) => {
  const { id } = match.params;
  return (
    <PageTemplate>
      <PhotoContainer id={id} />
    </PageTemplate>
  );
};

export default DetailPage;