import {
    FOOD_COUNT_API_FAILED,
    FOOD_COUNT_API_REQUEST,
    FOOD_COUNT_API_SUCCESS,
    

   
     
} from "../DashboardActionTypes";

let initialState = {
    loading: false,
    food_count: [],
    error: {},
    message: "",
    
};
//
export default function FoodCountDashReducer(state = initialState, action) {
    const { type, loading, payload, error, processing,} = action;
    switch (type) {
        // FOOD COUNT
        case FOOD_COUNT_API_REQUEST:
            return {
                loading,
                processing,
            }
        case FOOD_COUNT_API_SUCCESS:
            return {
                loading,
                food_count: payload?.data
                
            }
        case FOOD_COUNT_API_FAILED:
            return {
                loading,
                error,
                processing
            }
         
       
        default:
            return state
    }
}

