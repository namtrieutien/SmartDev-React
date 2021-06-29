import axiosCategory from './axiosCategory';

const categoryApi = {  
    getAllCategoriesData: () => {
        const url = `categories/get-all-categories`; 
        return axiosCategory.get(url, {});
    }
}

export default categoryApi;