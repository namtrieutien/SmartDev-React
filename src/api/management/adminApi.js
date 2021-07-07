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

  updateUser: (params) => {
    const url = '/admin/users';
    return axiosManagement.put(url, { params })
  },

  createUser: (params) => {
    const url = '/admin/users';
    return axiosManagement.post(url, { params })
  },

  deleteUser: (params) => {
    const url = '/admin/posts';
    return axiosManagement.delete(url, { params })
  },

}

export default adminApi;