import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import { pender } from 'redux-pender';

import * as api from '../../libraries/api';

// action types
const GET_PHOTO_LIST = 'list/GET_PHOTO_LIST';

// action creators
export const getPhotoList = createAction(GET_PHOTO_LIST, api.getPhotoList);

// initial state
const initialState = Map({
  photos: List(),
  meta: ''
});

// reducer
export default handleActions({
  ...pender({
    type: GET_PHOTO_LIST,
    onSuccess: (state, action) => {
      const { photos } = action.payload.data;
      const { meta } = action.payload.data;
      return state.set('photos', fromJS(photos))
                  .set('meta', meta)
    }
  }),
}, initialState);