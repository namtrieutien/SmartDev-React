import * as type from '../constants';

export function getCities() {
    return {
        type: type.GET_CITY_REQUESTED,
    }
}

export function getDistrict(city_id) {
  return {
      type: type.GET_DISTRICT_REQUESTED,
      city_id
  }
}

export function getCommute(city_id, district_id) {
  return {
      type: type.GET_COMMUTE_REQUESTED,
      city_id,
      district_id
  }
}
