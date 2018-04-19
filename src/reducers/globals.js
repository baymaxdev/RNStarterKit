import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
  navigator: null,
  data: { 
  }
});
const setNavigator = (state, action) => ({
  ...state,
  navigator: action.nav,
});
const setData = (state, action) => ({
  ...state,
  data: Object.assign({},state.data, action.data) 
});
const actionHandlers = {
  [Types.SET_NAVIGATOR]: setNavigator,
  [Types.SET_DATA]: setData,
};
export default createReducer(initialState, actionHandlers);
