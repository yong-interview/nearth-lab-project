import React, { Component } from 'react';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../store/modules/list';

class HeaderContainer extends Component {
  state = {
    type1: false,
    type2: false,
    type3: false,
    type4: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked
    });

    const typeId = e.target.value.split('')[4]

    this.props.history.push(`/labelTypeIds/${typeId}`)
  };

  render() {
    const { handleChange } = this;

    return (
      <Header
        handleChange={handleChange}
        types={this.state}
      />
    );
  }
}

export default connect(
  (state) => ({
    loading: state.pender.pending['list/GET_PHOTO_LIST'],
  }),
  (dispatch) => ({
    ListActions: bindActionCreators(listActions, dispatch),
  })
)(withRouter(HeaderContainer));