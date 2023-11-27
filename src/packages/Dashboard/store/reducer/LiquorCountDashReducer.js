import {
     
    LIQUOR_COUNT_API_FAILED,
    LIQUOR_COUNT_API_REQUEST, 
    LIQUOR_COUNT_API_SUCCESS,

} from "../DashboardActionTypes";

let initialState = {
    loading: false,
    liquor_count: [],
    error: {},
    message: "",
    
};
//
export default function LiquorCountDashReducer(state = initialState, action) {
    const { type, loading, payload, error, processing,} = action;
    switch (type) {
        //businesses
        case LIQUOR_COUNT_API_REQUEST:
            return {
                loading,
                processing,
            }
        case LIQUOR_COUNT_API_SUCCESS:
            return {
                loading,
                liquor_count: payload?.data
                
            }
        case LIQUOR_COUNT_API_FAILED:
            return {
                loading,
                error,
                processing
            }
         
       
        default:
            return state
    }
}

