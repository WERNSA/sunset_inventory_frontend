import axios from '../config';

// eslint-disable-next-line import/prefer-default-export
export const getInventoryList = () => axios.get('process/inventory/');

