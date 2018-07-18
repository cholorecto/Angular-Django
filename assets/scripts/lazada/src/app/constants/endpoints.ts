export const API_DOMAIN = 'http://127.0.0.1:8000';
export const API_PATH = '/api';

export const ITEM_API_PATH = () => `${API_PATH}/items/`;
export const ITEM_API_URL = () => `${API_DOMAIN}${ITEM_API_PATH()}`;
