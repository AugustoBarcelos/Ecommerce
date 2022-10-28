import axios from 'axios';

import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL, CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = (currentPage = 1) => async (dispatch) => {

  try {

    dispatch({ type: ALL_PRODUCTS_REQUEST })

    const { data } = await axios.get(`/api/v1/products?page=${currentPage}`)
    console.log(data);

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data
    })

    console.log(data);


  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message
    })
  }
}

//Clear Error
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS
  })
}

export const getProductDetails = (id) => async (dispatch) => {
  try {

    dispatch({ type: PRODUCT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/v1/product/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product
    })
    console.log(data);


  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message
    })
  }

}