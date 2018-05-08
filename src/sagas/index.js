import { put, call, takeEvery, takeLatest, select, cps } from 'redux-saga/effects';
import Types from '../actions/actionTypes';
import { Status } from '@src/constants';
import { getUser } from '@api/user';

// const getGlobals = (state) => state.get('globals');

function* setNavigator(action) {
	yield put({ type: Types.SET_NAVIGATOR, nav: action.nav });
}

// function* GetConfig(action) {
// 	yield put({ type: Types.GET_CONFIG_REQUEST });
// 	try {
// 		const res = yield call(getConfig);
// 		yield put({ type: Types.GET_CONFIG_SUCCESS, config: res });
// 	} catch (error) {
// 		yield put({ type: Types.GET_CONFIG_FAILURE });
// 		console.log(error);
// 	}
// }

export default function* sagas() {
	yield takeLatest('SETNAVIGATOR', setNavigator);
}
