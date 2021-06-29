import axiosManagement from "./axiosManagement";

const userApi = {
  statisticByPrice: () => {
    const url = '/order_details/statistic_by_price';
    return axiosManagement.get(url)
  }

}

export default userApi;