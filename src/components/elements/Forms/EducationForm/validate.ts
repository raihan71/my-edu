import * as Yup from 'yup';

export const validate = () => {
  return Yup.object().shape({
    schoolName: Yup.string()
      .required('School Name is required'),
    degree: Yup.string()
      .required('Degree is required'),
    fieldStudy: Yup.string()
      .required('Field Study is required'),
    grade: Yup.string()
      .required('Grade is required'),
    startYear: Yup.string()
      .required('Start Year is required'),
    endYear: Yup.string()
      .required('End Year is required'),
    description: Yup.string()
      .required('Description required'),
  });
};