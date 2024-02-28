import axios from 'axios';
import { serviceURI } from '@/configs/service';

const universityService = axios.create({
  baseURL: process.env.SERVICE_UNIVERISTY ?? 'http://universities.hipolabs.com'
});

export const getUniversities = async (search:any = '') => {
  const resp = await universityService.get(
    `${serviceURI.universities}?name=${search}`
  );
  return resp.data;
};

export default universityService;