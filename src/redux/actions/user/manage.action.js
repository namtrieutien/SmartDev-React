import * as type from '../../constants';

export const setStatictisByCategory = (data_statistic) => {
    return {
        type: type.SET_STATISTIC,
        total_all_orders: data_statistic[0],
        by_category: data_statistic.slice(1, data_statistic.length )
    };
};