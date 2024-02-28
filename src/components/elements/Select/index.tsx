import React, { useCallback } from 'react'
import Select from "react-tailwindcss-select";

const SelectCustom = (props: {
  value: any,
  handleChange: any,
  handleSearch: any,
  options: any
}) => {
  const handleOnSearch = useCallback((searchTerm: string) => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, []);

  const { value, handleChange, handleSearch, options } = props;
  return (
    <Select
      value={value}
      onChange={handleChange}
      options={options}
      primaryColor="indigo"
      isSearchable
      onSearchInputChange={e => handleOnSearch(e.target.value)}
      loading={true}
    />
  )
}

export default React.memo(SelectCustom);