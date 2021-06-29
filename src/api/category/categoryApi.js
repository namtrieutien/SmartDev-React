import axiosManagement from './axiosManagement';

const categoryApi = {
    getAllCategoriesData = () => {
        const url = `categories/get-all-categories`; 
        return instance.get(url, {});
    }
}

export const categoryApi;