import React from 'react';
import Select from 'react-tailwindcss-select';

const SelectCustom = (props: {
  value: any,
  handleChange: any,
  handleSearch: any,
  options: any,
  isLoading: boolean
}) => {
  const handleOnSearch = (searchTerm: string) => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  };

  const { value, handleChange, handleSearch, options, isLoading } = props;
  return (
    <Select
      value={value}
      onChange={handleChange}
      options={options}
      primaryColor="indigo"
      isSearchable
      onSearchInputChange={e => handleOnSearch(e.target.value)}
      loading={isLoading}
    />
  )
}

export default React.memo(SelectCustom);