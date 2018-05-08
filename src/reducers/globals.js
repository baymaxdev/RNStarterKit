import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';
import { Status } from '@src/constants';

export const initialState = Immutable({
  navigator: null,
  loaderVisible: false,
  data: { 
  },
});

const setNavigator = (state, action) => ({
  ...state,
  navigator: action.nav,
});

const setLoaderVisible = (state, action) => ({
  ...state,
  loaderVisible: action.loaderVisible,
});

const setData = (state, action) => ({
  ...state,
  data: Object.assign({},state.data, action.data) 
});

const actionHandlers = {
  [Types.SET_NAVIGATOR]: setNavigator,
  [Types.SET_LOADER_VISIBLE]: setLoaderVisible,
  [Types.SET_DATA]: setData,
};
export default createReducer(initialState, actionHandlers);
