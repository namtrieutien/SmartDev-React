import { call, put, takeEvery } from 'redux-saga/effects';
import { getSearchPostData , getPostByCat, getPostByPrice, getPostById} from '../../../api/posts/search';
import { searchComplete, searchByCatComplete, searchByPriceComplete, postLoadedAction } from '../../actions/posts/search.action';
import apiSunny from '../../../api/sunny'
import * as type from '../../constants';

function* getSearchPostSaga(action) {
  try {
    const data = yield call(getSearchPostData, action.params);
    yield put(searchComplete(data));
  } catch (error) {
    console.log(error)
  }
}


const getReportTypes = async () => {
  try {
    const response = await apiSunny.get(`/posts/report/types`);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return [];
  }
} 

function* userGetReportTypes(action) {
  try {
    const data = yield call(getReportTypes);
    yield put({type: type.GET_REPORT_TYPES, payload: data});
  } catch (e) {
    console.log(e.messages);
    // yield put({type: type.GET_USERS_FAILED, message: e.message});
  }
}

const postReport = async (reportRequest) => {
  try {
    const response = await apiSunny.post(`posts/${reportRequest.postId}/report`, {
      type : reportRequest.type,
      description: reportRequest.description
    });
    return response.data;
  } catch (e) {
    console.log(e.response.data);
    return [];
  }
} 

function* userPostReport(action) {
  try {
    const data = yield call(postReport, action.reportRequest);
    yield put({type: type.POST_REPORT, payload: data});
  } catch (e) {
    console.log(e);
  }
}
function* getPostByCatSaga(action) {
  try {
    const data = yield call(getPostByCat, action.params);
    yield put(searchByCatComplete(data));
  } catch (error) {
    console.log(error)
  }
}
function* getPostByPriceSaga(action) {
  try {
    const data = yield call(getPostByPrice, action.params);
    yield put(searchByPriceComplete(data));
  } catch (error) {
    console.log(error)
  }
}
//GET POST BY ID
const getPostAPI = async (pid) => {
  try {
    const response = await getPostById(pid);
    return response;
  } catch (e) {
    console.log(e);
  }
}

function* getPostSaga(action) {
  try {
    const res = yield call(getPostAPI, action.post_id);
    if(res){
      yield put(postLoadedAction(res));
    }
  } catch (e) {
    console.log(e.messages);
  }
}
function* searchPostsSaga() {
  yield takeEvery(type.POST_REPORT_REQUEST, userPostReport);
  yield takeEvery(type.GET_REPORT_TYPES_REQUEST, userGetReportTypes);
  yield takeEvery(type.POSTS_SEARCH_LOADING, getSearchPostSaga);
  yield takeEvery(type.LOAD_POST_BY_CAT, getPostByCatSaga);
  yield takeEvery(type.LOAD_POST_BY_PRICE, getPostByPriceSaga);
  yield takeEvery(type.GET_POST, getPostSaga);
}

export default searchPostsSaga;