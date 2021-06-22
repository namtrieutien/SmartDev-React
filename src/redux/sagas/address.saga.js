import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as type from '../constants';

import apiAdress from '../../api/address/address';

let province_id = 0;

const getCities = async () => {
  try {
    const response = await apiAdress.get(`/provinces`, {
      params: {
        size: 100,
      }
    });
    return response.data;
  } catch (e) {
    console.log(e.messages);
    return [];
  }
}

const getDistrict = async () => {
  try {
    console.log(province_id);
    const response = await apiAdress.get(`/districts?provinceId.equals=${province_id}`, {
      params: {
        size: 100,
      }
    });
    return response.data;
  } catch (e) {
    console.log(e.messages);
    return [];
  }
}

function* fetchCities(action) {
  try {
    
    const cities = yield call(getCities);
    yield put({type: type.GET_CITY, payload: cities});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

function* fetchDistrict(action) {
  try {
    province_id = action.city_id;
    const district = yield call(getDistrict);
    console.log(district);
    // yield put({type: type.GET_CITY, payload: cities});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

function* addressSaga() {
  yield takeEvery(type.GET_CITY_REQUESTED, fetchCities);
  yield takeLatest(type.GET_DISTRICT_REQUESTED, fetchDistrict);
}

export default addressSaga;