import React, { useState } from 'react';
import { useFormik } from "formik";
import { validate } from './validate';
import Datepicker from '../../Datepicker';

const EducationForm = ({ onSubmit, onCancel }: { onSubmit: (value:any) => Promise<void>, onCancel: () => Promise<void>}) => {
  const [showDateStart, setShowDateStart] = useState(false);
  const [showDateEnd, setShowDateEnd] = useState(false);
  const [startYear, setStartYear] = useState<String | null>(null);
  const [endYear, setEndYear] = useState<String | null>(null);

  const formik:any = useFormik({
    initialValues: {},
    validationSchema: validate,
    onSubmit: async (values) => {
      await onSubmit(values);
    },
  });

  const handleClearInputs = () => {
    formik.resetForm({
      values: {
        schoolName: '',
        grade: '',
        fieldStudy: '',
        startYear: '',
        degree: '',
        endYear: '',
        description: ''
      }
    });
    onCancel();
  };

  const handleStartYear = {
    onChange: (selectedDate: Date) => {
      const offset = selectedDate.getTimezoneOffset();
      const yourDate = new Date(selectedDate.getTime() - (offset*60*1000));
      const newDate = yourDate.toISOString().split('T')[0];
      setStartYear(newDate);
      formik.setFieldValue('startYear', newDate);
    },
    onClose: (state: boolean) => {
      setShowDateStart(state);
    }
  };

  const handleEndYear = {
    onChange: (selectedDate: Date) => {
      const offset = selectedDate.getTimezoneOffset();
      const yourDate = new Date(selectedDate.getTime() - (offset*60*1000));
      const newDate = yourDate.toISOString().split('T')[0];
      setEndYear(newDate);
      formik.setFieldValue('endYear', newDate);
    },
    onClose: (state: boolean) => {
      setShowDateEnd(state);
    }
  };

  return (
  <form onSubmit={formik.handleSubmit}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="mb-5">
        <label htmlFor="schoolName" className="block text-sm font-medium leading-6 text-white">School Name</label>
        <div className="mt-1">
          <input
            placeholder="School Name"
            type="text"
            id="schoolName"
            className="px-3 py-2 border border-gray-300 w-full rounded-lg"
            name="schoolName"
            {...formik.getFieldProps('schoolName')}
          />
          {formik.errors?.schoolName && formik.touched?.schoolName && formik.submitCount > 0 ? (
            <div className="mt-1 text-red-600">{formik.errors?.schoolName}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="degree" className="block text-sm font-medium leading-6 text-white">Degree</label>
        <div className="mt-1">
          <input
            placeholder="Degree"
            type="text"
            id="degree"
            className="px-3 py-2 border border-gray-300 w-full rounded-lg"
            name="degree"
            {...formik.getFieldProps('degree')}
          />
          {formik.errors?.degree && formik.touched?.degree && formik.submitCount > 0 ? (
            <div className="mt-1 text-red-600">{formik.errors?.degree}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="fieldStudy" className="block text-sm font-medium leading-6 text-white">Field Study</label>
        <div className="mt-1">
          <input
            placeholder="Field Study"
            type="text"
            id="fieldStudy"
            className="px-3 py-2 border border-gray-300 w-full rounded-lg"
            name="fieldStudy"
            {...formik.getFieldProps('fieldStudy')}
          />
          {formik.errors?.fieldStudy && formik.touched?.fieldStudy && formik.submitCount > 0 ? (
            <div className="mt-1 text-red-600">{formik.errors?.fieldStudy}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="grade" className="block text-sm font-medium leading-6 text-white">Grade</label>
        <div className="mt-1">
          <input
            placeholder="Grade"
            type="text"
            id="grade"
            name="grade"
            className="px-3 py-2 border border-gray-300 w-full rounded-lg"
            {...formik.getFieldProps('grade')}
          />
          {formik.errors?.grade && formik.touched?.grade && formik.submitCount > 0 ? (
            <div className="mt-1 text-red-600">{formik.errors?.grade}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="startYear" className="block text-sm font-medium leading-6 text-white">Start Year</label>
        <div className="mt-1">
          <Datepicker
            handleChange={handleStartYear.onChange}
            handleClose={handleStartYear.onClose}
            show={showDateStart}
            title="Start Year"
          >
            <input
              placeholder="Start Year"
              type="text"
              id="startYear"
              className="px-3 py-2 border border-gray-300 w-full rounded-lg"
              value={startYear}
              name="startYear"
              onFocus={() => setShowDateStart(true)}
              readOnly
              {...formik.getFieldProps('startYear')}
            />
          </Datepicker>
          {formik.errors?.startYear && formik.touched?.startYear && formik.submitCount > 0 ? (
            <div className="mt-1 text-red-600">{formik.errors?.startYear}</div>
          ) : null}
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="endYear" className="block text-sm font-medium leading-6 text-white">End Year</label>
        <div className="mt-1">
          <Datepicker
            handleChange={handleEndYear.onChange}
            handleClose={handleEndYear.onClose}
            show={showDateEnd}
            title="End Year"
          >
            <input
              placeholder="End Year"
              type="text"
              id="endYear"
              className="px-3 py-2 border border-gray-300 w-full rounded-lg"
              name="endYear"
              value={endYear}
              onFocus={() => setShowDateEnd(true)}
              readOnly
              {...formik.getFieldProps('endYear')}
            />
          </Datepicker>
          {formik.errors?.endYear && formik.touched?.endYear && formik.submitCount > 0 ? (
            <div className="mt-1 text-red-600">{formik.errors?.endYear}</div>
          ) : null}
        </div>
      </div>
    </div>
    <div className="mb-5">
      <label htmlFor="description" className="block text-sm font-medium leading-6 text-white">Description</label>
      <div className="mt-2">
        <textarea
          placeholder="Description"
          type="text"
          id="description"
          name="description"
          className="px-3 py-2 border border-gray-300 w-full rounded-lg"
          {...formik.getFieldProps('description')}
        />
        {formik.errors?.description && formik.touched?.description && formik.submitCount > 0 ? (
          <div className="mt-1 text-red-600">{formik.errors?.description}</div>
        ) : null}
      </div>
    </div>

    <div className="mt-8 col-span-2">
      <div className="grid grid-cols-2 gap-4">
        <button
          className="rounded-lg w-full px-4 py-2 bg-red-600 text-white"
          type="reset"
          onClick={handleClearInputs}
        >
          Cancel
        </button>
        <button
          className="rounded-lg w-full px-4 py-2 bg-indigo-600 text-white disabled:bg-opacity-65"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? 'Loading' : 'Submit'}
        </button>
      </div>
    </div>
  </form>

  );
};

export default EducationForm;