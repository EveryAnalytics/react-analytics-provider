import React from 'react';
import styled from '@emotion/styled';

const Select = ({
  title,
  selectValue,
  options,
  onClick,
  onChange,
}: {
  title: string;
  selectValue: string;
  options?: string[];
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (value: string) => void;
}) => {
  // const handleClick = (e: React.MouseEvent) => {
  //   onClick?.(e);
  // };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = (e.target as HTMLSelectElement).value;
    onChange?.(value);
  };
  return (
    <SelectContainer>
      <SelectLabel>
        {title}
        <select value={selectValue} onChange={handleChange}>
          {options?.map(option => {
            return <option value={option}>{option}</option>;
          })}
        </select>
      </SelectLabel>
    </SelectContainer>
  );
};

export default Select;

const SelectContainer = styled.div``;
const SelectLabel = styled.label``;
