import {
    BUSINESS_COUNT_API_FAILED,
    BUSINESS_COUNT_API_REQUEST,
    BUSINESS_COUNT_API_SUCCESS,
    
} from "../DashboardActionTypes";

let initialState = {
    loading: false,
    businesses_count: [],
    error: {},
    message: "",
    
};
//
export default function BusinessCountDashReducer(state = initialState, action) {
    const { type, loading, payload, error, processing,} = action;
    switch (type) {
        //businesses
        case BUSINESS_COUNT_API_REQUEST:
            return {
                loading,
                processing,
            }
        case BUSINESS_COUNT_API_SUCCESS:
            return {
                loading,
                businesses_count: payload?.data
                
            }
        case BUSINESS_COUNT_API_FAILED:
            return {
                loading,
                error,
                processing
            }
         
       
        default:
            return state
    }
}

