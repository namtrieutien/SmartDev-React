import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as type from '../constants';

import apiAdress from '../../api/address/address';

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

const getDistrict = async (city_id) => {
  try {
    const response = await apiAdress.get(`/districts?provinceId.equals=${city_id}`, {
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

const getCommute = async (district_id) => {
  try {
    const response = await apiAdress.get(`/wards?districtId.equals=${district_id}`, {
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
    const district = yield call(getDistrict, action.city_id);
    yield put({type: type.GET_DISTRICT, payload: district});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}


function* fetchCommute(action) {
  try {
    const commutes = yield call(getCommute, action.district_id);
    yield put({type: type.GET_COMMUTE, payload: commutes});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

function* addressSaga() {
  yield takeEvery(type.GET_CITY_REQUESTED, fetchCities);
  yield takeEvery(type.GET_DISTRICT_REQUESTED, fetchDistrict);
  yield takeEvery(type.GET_COMMUTE_REQUESTED, fetchCommute);
}

export default addressSaga;