/* eslint-disable import/prefer-default-export */
import axios from '../config';

export const getUnitMeasurementList = () => axios.get('catalog/unit-measurement/');

export const postUnitMeasurement = (data) =>
  axios.post('catalog/unit-measurement/', data);

export const putUnitMeasurement = (data) =>
  axios.put(`catalog/unit-measurement/${data.id}/`, data);

export const deleteUnitMeasurement = (id) =>
  axios.delete(`catalog/unit-measurement/${id}/`);
