import { createAction, handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../libraries/api';

// action types
const GET_PHOTO = 'photo/GET_PHOTO';

// action creators
export const getPhoto = createAction(GET_PHOTO, api.getPhoto);

// initial state
const initialState = Map({
  photo: Map({

  }),
});

// reducer
export default handleActions({
  ...pender({
    type: GET_PHOTO,
    onSuccess: (state, action) => {
      const { data } = action.payload;
      const { id, completed } = data;
      if(localStorage.getItem(`${id} completed`) === null) {
        localStorage.setItem(`${id} completed`, completed)
      }
      return state.set('photo', fromJS(data));
    }
  }),
}, initialState);