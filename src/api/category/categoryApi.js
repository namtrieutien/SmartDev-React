import axiosManagement from '../management/axiosManagement';

const categoryApi = {  
    getAllCategoriesData: () => {
        const url = `/admin/categories`; 
        return axiosManagement.get(url, {});
    }
}

export default categoryApi;