/* eslint-disable no-alert */
import axios from 'axios';
import server from '../../Config';
import {
  LOGOUT_SUCCESS,
  STORE_SEARCH_PARAMS,
  GET_AIRLINE_DETAILS,
} from './types';


export const storeSearchParams = (airlineDetails, history) => async (dispatch) => {
    dispatch({
        type: STORE_SEARCH_PARAMS,
        payload: airlineDetails,
    });
};

export const getAirlineDetails = () => async (dispatch) => {
    axios.get(`${server}/airline`)
      .then((response) => {
        dispatch({
          type: GET_AIRLINE_DETAILS,
          payload: response.data,
        });
        return true;
      })
      .catch((err) => {
        alert(err);
        return false;
      });
  };

  export const logout = (history) => async (dispatch) => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
    history.push('/');
  };