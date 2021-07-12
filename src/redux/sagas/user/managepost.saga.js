import { takeEvery, call, put, all, takeLatest } from "redux-saga/effects";
import * as type from '../../constants';
import userApi from '../../../api/management/userApi';
import * as actions from '../../actions/user/managepost.action'

//LOAD POST
const loadPostAPI = async () => {
  try {
    const response = await userApi.loadPosts();
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
}

function* loadPost() {
  try {
    const data = yield call(loadPostAPI);
    if (data) {
      yield put(actions.postsLoaded(data));
    }
  } catch (e) {
    console.log(e.messages);
  }
}
//DELETE POST
const deletePostAPI = async (pid) => {
  try {
    const response = await userApi.deletePost(pid);
    return response;
  } catch  (e) {
    return e.response;
  }
}

function* deletePost(action) {
  try {
    const response = yield call(deletePostAPI, action.post_id);
    if (response) { 
      
      yield put(actions.deletedPost(response,action.post_id));
    }
  } catch (e) {
    console.log("eror",e);
  }
}

//WATCHER SAGA
function* watchLoadPosts() {
  yield takeEvery(type.LOAD_POST_USER, loadPost)
}
function* watchDeletePosts() {
  yield takeLatest(type.DELETE_POST, deletePost)
}
function* managePostSaga() {
  yield all([
    watchLoadPosts(),
    watchDeletePosts()
  ])
}

export default managePostSaga;