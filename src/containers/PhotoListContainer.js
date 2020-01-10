import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import PhotoList from '../components/PhotoList';
import * as listActions from '../store/modules/list';

class PhotoListContainer extends Component {
  getPhotoList() {
    const { page, ListActions, labelTypeIds } = this.props;

    ListActions.getPhotoList({
      page,
      labelTypeIds
    });
  }
  componentDidMount() {
    this.getPhotoList();
  }

  componentDidUpdate(prevProps, prevState) {
    // 페이지가 바뀔 때 리스트를 다시 불러옵니다.
    if(prevProps.page !== this.props.page) {
      this.getPhotoList();
    }
  }

  render() {
    const { loading, photos, meta } = this.props;
    
    return (
      <Fragment>
        <PhotoList
          photos={photos}
          meta={meta}
          loading={loading}
        />
      </Fragment>
      
    );
  }
}

export default connect(
  (state) => ({
    loading: state.pender.pending['list/GET_PHOTO_LIST'],
    photos: state.list.get('photos'),
    meta: state.list.get('meta')
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch),
  })
)(PhotoListContainer);