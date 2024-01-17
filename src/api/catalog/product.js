/* eslint-disable import/prefer-default-export */
import axios from '../config';

export const getProductList = () => axios.get('catalog/product/');

export const postProduct = (data) => axios.post('catalog/product/', data);

export const putProduct = (data) => axios.put(`catalog/product/${data.id}/`, data);

export const deleteProduct = (id) => axios.delete(`catalog/product/${id}/`);