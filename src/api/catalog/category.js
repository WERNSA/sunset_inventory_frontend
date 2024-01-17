/* eslint-disable import/prefer-default-export */
import axios from '../config';

export const getCategoryList = () => axios.get('catalog/category/');

export const postCategory = (data) => axios.post('catalog/category/', data);

export const putCategory = (data) => axios.put(`catalog/category/${data.id}/`, data);

export const deleteCategory = (id) => axios.delete(`catalog/category/${id}/`);