import axiosManagement from "./axiosManagement";

const adminApi = {
  getAllUsers: () => {
    const url = '/admin/users';
    return axiosManagement.get(url)
  },

  getAllPosts: () => {
    const url = '/admin/posts';
    return axiosManagement.get(url)
  },

  getAllCategories: () => {
    const url = '/admin/categories';
    return axiosManagement.get(url)
  },

  getFiveNewestUsers: () => {
    const url = '/admin/top-five-newest-users';
    return axiosManagement.get(url)
  },

  getLastestPost: () => {
    const url = '/admin/lastest-posts';
    return axiosManagement.get(url)
  },
  
  getTopCategories: () => {
    const url = '/admin/top-categories';
    return axiosManagement.get(url)
  },

  getUsersPerMonths: () => {
    const url = '/admin/users-per-months';
    return axiosManagement.get(url)
  },
  
  getPostPerDays: () => {
    const url = '/admin/posts-per-days';
    return axiosManagement.get(url)
  },

  getTopTenSeller: () => {
    const url = '/admin/toptenseller';
    return axiosManagement.get(url)
  },

  getTopTenBuyer: () => {
    const url = '/admin/toptenbuyer';
    return axiosManagement.get(url)
  },

  getUser: (idUser) => {
    const url = `/admin/users/${idUser}`;
    return axiosManagement.get(url)
  },

  updateUser: (body) => {
    console.log(body);
    const url = '/admin/users';
    return axiosManagement.put(url, body)
  },

  createUser: (body) => {
    const url = '/admin/users';  
    return axiosManagement.post(url, body)
  },

  deleteUser: (body) => {
    const url = '/admin/users';
    return axiosManagement.delete(url, { data: body })
  },

  getLastestReports: (params) => {
    const url = '/admin/reports'
    return axiosManagement.get(url, {params})
  },

  getPost: (idPost) => {
    const url = `/admin/posts/${idPost}`
    return axiosManagement.get(url)
  },

  getTopTransaction: (params) => {
    const url = `/admin/top_order`
    return axiosManagement.get(url, {params})
  },

  getFeatureInfor: () => {
    const url = 'admin/feature_infor'
    return axiosManagement.get(url);
  },

  getCounter: () => {
    const url = 'admin/statistic'
    return axiosManagement.get(url);
  },

  deletePost: (body) => {
    const url = '/admin/posts';
    return axiosManagement.delete(url, { data: body })
  }
}

export default adminApi;