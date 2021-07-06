import * as type from '../../constants'

const initialState = {
  params: {
    title: '',
    _page: 0,
    _limit: 6
  },
  load: true,
  data: {},
  pagination: {
    _page: 0,
    _limit: 6,
    _totalRows: 100
  },
  error: {
    code: 200,
    error: 'success',
    message: 'ok'
  },
  reportTypes: [],
  checkPostReport: false
};

export const searchPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.POSTS_SEARCH_LOADING:
      console.log(action.params)
      return {
        ...state,
        params: action.params,
        load: true,
      };

    case type.POSTS_SEARCH_COMPLETE:
      const { error } = action.data;
      if (error) {
        return {
          ...state,
          load: false,
          error: action.data
        };
      }

      const { data, pagination } = action.data;
      return {
        ...state,
        load: false,
        data: data,
        pagination: pagination,
        error: {
          code: 200,
          error: 'success',
          message: 'ok'
        }
      };
    case type.GET_REPORT_TYPES_REQUEST:
      return {
        ...state,
      }
    case type.GET_REPORT_TYPES:
      console.log(action.payload);
      return {
        ...state,
        reportTypes: action.payload
      }
    case type.POST_REPORT_REQUEST:
      return {
        ...state,
        reportRequest: action.reportRequest,
        checkPostReport: true,
        report: undefined
      }
    case type.POST_REPORT:
      console.log(action.payload);
      return {
        ...state,
        checkPostReport: false,
        report: action.payload
      }
    case type.RESET_STATUS_REPORT: 
      return {
        ...state,
        report: undefined
      }
    default:
      return state;
  }
}