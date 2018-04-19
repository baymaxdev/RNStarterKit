import Types from './actionTypes';

export const setNavigator = nav =>
  ({ type: Types.SET_NAVIGATOR, nav });
export const setData = data =>
  ({ type: Types.SET_DATA, data });