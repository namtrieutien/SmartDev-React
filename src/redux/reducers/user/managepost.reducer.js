import * as type from '../../constants'

const initialState = {
  postList: [],
  total_sold: 0,
  total_selling: 0,
  total_sold_posts: 0,
  total_selling_posts: 0,
  response: ''
};

export const managePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOADED_POST_USER:
      let sold = 0; let sold_post = 0;
      let selling = 0; let selling_post = 0;
      action.posts.map(item => {
        if (item.status) {
          sold += item.price;
          sold_post += 1;
        }
        else {
          selling += item.price;
          selling_post += 1;
        }
      })
      return {
        ...state,
        postList: action.posts,
        total_sold: sold,
        total_selling: selling,
        total_sold_posts: sold_post,
        total_selling_posts: selling_post
      }

    case type.DELETED_POST:
      const newList = [...state.postList];
      const newItem = newList.find(item => item.id === action.post_id)
      if (newItem.id === action.post_id) {
        var filtered = newList.filter(function (el) { return el !== newItem; });
        var total_sold = state.total_sold;
        var total_sold_posts = state.total_sold_posts;
        var total_selling = state.total_selling;
        var total_selling_posts = state.total_selling_posts;
        if (newItem.status) {
          total_sold -= newItem.price;
          total_sold_posts -= 1;
        }
        else {
          total_selling -= newItem.price;
          total_selling_posts -= 1;
        }
        return {
          ...state,
          postList: filtered,
          total_sold:total_sold,
          total_selling: total_selling,
          total_sold_posts: total_sold_posts,
          total_selling_posts: total_selling_posts,
          response: action.response

        };
      }
    default:
      return state;
  }
};
