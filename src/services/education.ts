import axios from 'axios';
import { serviceURI } from '@/configs/service';

const educationService = axios.create({
  baseURL: process.env.SERVICE_URL || 'http://localhost:8080'
});

export const getEducations = async () => {
  const resp = await educationService.get(serviceURI.educations);
  return resp.data;
};

export const addEducation = async (item:any) => {
  return await educationService.post(serviceURI.educations, item);
};

export const updateEducation = async (item:any) => {
  return await educationService.patch(`${serviceURI.educations}/${item.id}`, item);
};

export const deleteEducation = async ({ id }:any) => {
  return await educationService.delete(`${serviceURI.educations}/${id}`, id);
};


export default educationService;