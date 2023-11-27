import {
    BILL_COUNT_API_FAILED,
    BILL_COUNT_API_REQUEST,
    BILL_COUNT_API_SUCCESS,
    
} from "../DashboardActionTypes";

let initialState = {
    loading: false,
    bill_count: [],
    error: {},
    message: "",
    
};
//
export default function BillDashReducer(state = initialState, action) {
    const { type, loading, payload, error, processing,} = action;
    switch (type) {
        //businesses
        case BILL_COUNT_API_REQUEST:
            return {
                loading,
                processing,
            }
        case BILL_COUNT_API_SUCCESS:
            return {
                loading,
                bill_count: payload?.data
                
            }
        case BILL_COUNT_API_FAILED:
            return {
                loading,
                error,
                processing
            }
         
       
        default:
            return state
    }
}

