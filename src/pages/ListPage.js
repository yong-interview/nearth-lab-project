import React from 'react';
import PageTemplate from '../components/PageTemplate';
import HeaderContainer from '../containers/HeaderContainer';
import PhotoListContainer from '../containers/PhotoListContainer';

const ListPage = ({ match }) => {
  // page의 기본 값을 1로
  const { page = 1, labelTypeIds } = match.params;
  
  return (
    <PageTemplate>
      <HeaderContainer />
      <PhotoListContainer
        page={parseInt(page, 10)}
        labelTypeIds={labelTypeIds}
      />
    </PageTemplate>
  );
};

export default ListPage;