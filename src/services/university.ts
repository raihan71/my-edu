import axios from 'axios';
import { serviceURI } from '@/configs/service';

const universityService = axios.create({
  baseURL: process.env.SERVICE_UNIVERISTY ?? 'https://my-uni-be.vercel.app/'
});

export const getUniversities = async (search:any = '') => {
  const queryParams = search !== '' ? `?name=${search}` : '';
  const resp = await universityService.get(`${serviceURI.universities}${queryParams}`);
  return resp.data;
};

export default universityService;