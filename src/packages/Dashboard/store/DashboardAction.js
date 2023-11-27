import {
    API_ERROR,
    API_REQUEST,
    API_STATS_ERROR,
    API_STATS_REQUEST,
    API_STATS_SUCCESS,
    API_SUCCESS,

    LIQUOR_COUNT_API_FAILED,
    LIQUOR_COUNT_API_REQUEST, 
    LIQUOR_COUNT_API_SUCCESS,


    FOOD_COUNT_API_FAILED,
    FOOD_COUNT_API_REQUEST, 
    FOOD_COUNT_API_SUCCESS,

    BILL_COUNT_API_FAILED,
    BILL_COUNT_API_REQUEST, 
    BILL_COUNT_API_SUCCESS,
} from "./DashboardActionTypes";

import { BUSINESS_COUNT_API_FAILED, BUSINESS_COUNT_API_REQUEST, BUSINESS_COUNT_API_SUCCESS } from "./DashboardActionTypes";
import call from "../../../core/services/http";
import DashboardConstants from "./DashboardConstants";
import AuthService from "../../../core/access-control/AuthService";

export const getProfile =  (mobile_number) => async (dispatch) => {
    try {
        dispatch({
            type: API_REQUEST,
            loading: true
        });
        const res = AuthService.user
        if (res) {
            dispatch({
                type: API_SUCCESS,
                payload: res.user,
                loading: false
            });
            dispatch({ type: 'set', profile: res.user })
        }
        else{
            dispatch({
                type: API_ERROR,
                payload: res,
                loading: false
            });
        }
    } catch (err) {
        dispatch({
            type: API_ERROR,
            error: {message: "could not fetch user profile"},
            loading: false
        });
    }
};

export const getBusinessesDashCount = () => async (dispatch) => {
    try {
        dispatch({
            type: BUSINESS_COUNT_API_REQUEST,
            loading: true,
        });
        const res = await call("get", 'https://sandbox.sasapay.me/apps/county/api/v1/businesses/get-business-counts/');
        console.log('--------------------------------------->Here  dashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', res.data)
        if (res.data.status) {
            dispatch({
                type: BUSINESS_COUNT_API_SUCCESS,
                payload: res.data,
                loading: false,
                message: res.data.message,
            });
        } else {
            dispatch({
                type: BUSINESS_COUNT_API_FAILED,
                payload: res.data,
                loading: false
            });
           
        }
    } catch (err) {
        dispatch({
            type: BUSINESS_COUNT_API_FAILED,
            error: err.response.data,
            loading: false
        });
        
    }
}



//LIQUOR COUNT
export const getLiqourDashCount= payload => async (dispatch) => {
    try {
        dispatch({
            type: LIQUOR_COUNT_API_REQUEST,
            loading: true,
        });
        const res = await call("get", 'https://sandbox.sasapay.me/apps/county/api/v1/health/get-liqour-application-counts/');
        console.log('*****************************************************liqour COUNT *****************************************************',res)
        if (res.data.status) {
            dispatch({
                type: LIQUOR_COUNT_API_SUCCESS,
                payload: res.data,
                loading: false,
                message: res.data.message,
            });
 
        } else {
            dispatch({
                type: LIQUOR_COUNT_API_FAILED,
                payload: res.data,
                loading: false
            });
            
        }
    } catch (err) {
        dispatch({
            type: LIQUOR_COUNT_API_FAILED,
            error: err.response.data,
            loading: false
        });
         
    }
}


export const getFoodDashCount= payload => async (dispatch) => {
    try {
        dispatch({
            type: FOOD_COUNT_API_REQUEST,
            loading: true,
        });
        const res = await call("get", 'https://sandbox.sasapay.me/apps/county/api/v1/health/get-food-application-counts/');
        console.log('----------------------------------> FOOD COUNT res',res)
        if (res.data.status) {
            dispatch({
                type: FOOD_COUNT_API_SUCCESS,
                payload: res.data,
                loading: false,
                message: res.data.message,
            });
 
        } else {
            dispatch({
                type: FOOD_COUNT_API_FAILED,
                payload: res.data,
                loading: false
            });
           
        }
    } catch (err) {
        dispatch({
            type: FOOD_COUNT_API_FAILED,
            error: err.response.data,
            loading: false
        });
        
    }
}


export const getBillDashCount= payload => async (dispatch) => {
    try {
        dispatch({
            type: BILL_COUNT_API_REQUEST,
            loading: true,
        });
        const res = await call("get", 'https://sandbox.sasapay.me/apps/county/api/v1/finance/get-total-income/');
       
        if (res.data.status) {
            dispatch({
                type: BILL_COUNT_API_SUCCESS,
                payload: res.data,
                loading: false,
                message: res.data.message,
            });
 
        } else {
            dispatch({
                type: BILL_COUNT_API_FAILED,
                payload: res.data,
                loading: false
            });
           
        }
    } catch (err) {
        dispatch({
            type: BILL_COUNT_API_FAILED,
            error: err.response.data,
            loading: false
        });
        
    }
}
