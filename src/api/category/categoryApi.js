import axiosCategory from './axiosCategory';

const categoryApi = {  
    getAllCategoriesData: () => {
        const url = `categories/get-all-categories`; 
        return axiosCategory.get(url, {});
    },
    getSizeCategory: (param) => {
        const url = `categories/get-size-category?id=${param}`; 
        return axiosCategory.get(url, {});
    }
    
}

export default categoryApi;