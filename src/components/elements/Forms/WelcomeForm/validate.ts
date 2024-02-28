import * as Yup from 'yup';

export const validate = () => {
  return Yup.object().shape({
    name: Yup.string()
      .required('Your Name is required'),
  });
};