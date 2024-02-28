import React from 'react';
import Datepicker from 'tailwind-datepicker-react';

const CustomDatePicker = (props: {
  children: React.ReactNode,
  title: string,
  handleChange: (event: any) => void;
  show: boolean;
  handleClose: (event: any) => void;
}) => {
  const { children, title, handleChange, handleClose, show } = props;
  const options:any = {
    title: title,
    autoHide: true,
    todayBtn: false,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-gray-700 dark:bg-gray-800",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "bg-red-500",
      input: "",
      inputIcon: "",
      selected: "",
    },
    icons: {
      // () => ReactElement | JSX.Element
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric"
    }
  };
  return (
    <Datepicker
      onChange={handleChange}
      options={options}
      setShow={handleClose}
      show={show}
    >
      {children}
    </Datepicker>
  )
}

export default CustomDatePicker