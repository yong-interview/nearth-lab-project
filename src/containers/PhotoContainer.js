import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import PhotoDetail from '../components/PhotoDetail';
import * as photoActions from '../store/modules/photo';

class PhotoContainer extends Component {
  state = {
    completed: localStorage.getItem(`${this.props.id} completed`)
  }
  componentDidMount() {
    const { PhotoActions, id } = this.props;
    PhotoActions.getPhoto(id);
  }

  handleCompleted = async () => {
    const { id } = this.props;
    localStorage.setItem(`${id} completed`, true);
  }

  handleImperfect = async () => {
    const { id } = this.props;
    localStorage.setItem(`${id} completed`, false);
  }

  changeButton = async () => {
    const { id } = this.props;
    this.setState(prevState => {
      const { completed } = prevState;
      if(completed === null) {
        return localStorage.getItem(`${id} completed`)
      } else if(completed === 'false') {
        return false
      }
        else if(completed === 'true') {
          return true
        }
    })
  }

  render() {
    const { loading, photo } = this.props;
    const { handleCompleted, handleImperfect, changeButton } = this;
    const { id, photoUrl = '', photoTakenAt, createdAt, labels }  = photo.toJS();
    const fileName = photoUrl.split('/')[3];
    const completedLocal = localStorage.getItem(`${id} completed`);
    return (
      <Fragment>
        <PhotoDetail
          id={id}
          fileName={fileName}
          photoUrl={photoUrl}
          labels={labels}
          photoTakenAt={photoTakenAt}
          createdAt={createdAt}
          completed={completedLocal}
          loading={loading}
          handleCompleted={handleCompleted}
          handleImperfect={handleImperfect}
          changeButton={changeButton}
        />
      </Fragment>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.pender.pending['photo/GET_PHOTO'],
    photo: state.photo.get('photo'),
  }),
  (dispatch) => ({
    PhotoActions: bindActionCreators(photoActions, dispatch),
  })
)(PhotoContainer);