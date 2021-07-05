import axiosManagement from "./axiosManagement";

const userApi = {
  statisticByPrice: () => {
    const url = '/order_details/statistic_by_price';
    return axiosManagement.get(url)
  },
  loadCart: () => {
    const url = '/cart/items';
    return axiosManagement.get(url)
  },

  addItemToCart: (pid) => {
    const url = `/cart/add/${pid}` ;
    return axiosManagement.post(url)
  },
  removeCartItem: (pid) => {
    const url = `/cart/delete?post_id=${pid}` ;
    return axiosManagement.delete(url)
  },
  statisticBuy: () => {
    const url = '/posts/statistic_buy';
    return axiosManagement.get(url)
  },
  editUser: (user) => {
    const url = '/user/edit';
    return axiosManagement.put(url, user)
  },
}

export default userApi;