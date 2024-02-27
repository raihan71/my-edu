import axios from 'axios';
import { serviceURI } from '@/configs/service';

const universityService = axios.create({
  baseURL: process.env.SERVICE_UNIVERISTY || 'http://localhost:8080'
});

export const getEducations = async () => {
  const resp = await universityService.get(serviceURI.universities);
  return resp.data;
};

export default universityService;