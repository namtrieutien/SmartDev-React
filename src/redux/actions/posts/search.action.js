import * as type from '../../constants';

export const searchLoading = (params) => {
  return {
    type: type.POSTS_SEARCH_LOADING,
    params
  }
}

export function searchComplete(data) {
  return {
    type: type.POSTS_SEARCH_COMPLETE,
    data
  }
}

export const getReportTypes = () => {
  return {
    type: type.GET_REPORT_TYPES_REQUEST
  }
}

export const report = (reportRequest) => {
  return {
    type: type.POST_REPORT_REQUEST,
    reportRequest
  }
}

export const resetStatus = () => {
  return {
    type: type.RESET_STATUS_REPORT
  }
}
export const searchByCatLoading = (params) => {
  return {
    type: type.LOAD_POST_BY_CAT,
    params
  }
}

export function searchByCatComplete(data) {
  return {
    type: type.LOADED_POST_BY_CAT,
    data
  }
}