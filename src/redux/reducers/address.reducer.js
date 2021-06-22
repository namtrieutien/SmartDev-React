import * as type from '../constants'

const initialState = {
  cities: [],
  district: [],
  commute: []
}

export default function address(state = initialState, action) {
  switch (action.type) {
    case type.GET_CITY_REQUESTED:
      return {
        ...state,
      }
    case type.GET_CITY:
      return {
        ...state,
        cities: action.payload,
      }
    case type.GET_DISTRICT_REQUESTED:
      return {
        ...state,
        city_id: action.city_id
      }
    case type.GET_DISTRICT:
      return {
        ...state,
        district: action.payload,
      }
    case type.GET_COMMUTE_REQUESTED:
      return {
        ...state,
        city_id: action.city_id,
        district_id: action.district_id
      }
    case type.GET_COMMUTE:
      return {
        ...state,
        commute: action.payload,
      }
    default:
      return state;
  }
}