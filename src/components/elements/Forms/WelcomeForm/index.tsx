import React from 'react';
import { useFormik } from 'formik';
import { validate } from './validate';

const WelcomeForm = ({ onSubmit }: { onSubmit: (value:any) => Promise<void> }) => {

  const formik:any = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: validate,
    onSubmit: async (values) => {
      try {
        await onSubmit(values);
      } catch (error) {
        throw error;
      } finally {
        handleClearInputs();
      }
    },
  });

  const handleClearInputs = () => {
    formik.resetForm({
      values: {
        name: ''
      }
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name" className="sr-only">Name</label>
      <input name="name" type="text" placeholder="Your Name" id="name" className="block w-full md:w-1/4 justify-items-center align-middle mx-auto my-3 p-3 border border-gray-500 text-white rounded-lg bg-gray-700 text-base focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
      {...formik.getFieldProps('name')}
      />
      {formik.errors?.name && formik.touched?.name && formik.submitCount > 0 ? (
        <div className="mt-1 text-center text-red-600">{formik.errors?.name}</div>
      ) : null}
      <div className="flex justify-center align-middle ml-1.5 mt-6">
          <button type="submit" className="w-full md:w-1/5 text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-10 py-4 text-center me-2 mb-2">Enter</button>
      </div>
    </form>
  )
}

export default WelcomeForm