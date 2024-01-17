import axios from '../config';

export const getBrandList = () => axios.get('catalog/brand/');

export const postBrand = (data) => axios.post('catalog/brand/', data);

export const putBrand = (data) => axios.put(`catalog/brand/${data.id}/`, data);

export const deleteBrand = (id) => axios.delete(`catalog/brand/${id}/`);
