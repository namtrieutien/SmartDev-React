import * as types from '../../constants';

export const loadPosts = () => {
  return {
      type: types.LOAD_POST_USER
  }
}

export const postsLoaded = posts => {
  return {
      type: types.LOADED_POST_USER,
      posts : posts
  }
}
export const deletePost = (pid) => {
  return {
      type: types.DELETE_POST,
      post_id: pid

  }
}
export const deletedPost = (response, pid) => {
    return {
      type: types.DELETED_POST,
      response: response,
      post_id: pid
  }
}
