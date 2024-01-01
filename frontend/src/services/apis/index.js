import { httpPost } from 'services/ApiService';

export const createShortUrl = async (long_url) => {
  const response = await httpPost('/create', { long_url });
  return response;
};

export const lookupShortUrl = async (short_url) => {
  const response = await httpPost('/lookup', { short_url });
  return response;
};
