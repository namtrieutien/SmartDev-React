import axiosCategory from './axiosCategory';

const categoryApi = {  
    getAllCategoriesData: () => {
        const url = `categories/get-all-categories`; 
        return axiosCategory.get(url, {});
    },
    getSizeCategory: (id) => {
        const url = `categories/get-size-category/id=${id}`; 
        return axiosCategory.get(url, {});
    }
    
}

export default categoryApi;