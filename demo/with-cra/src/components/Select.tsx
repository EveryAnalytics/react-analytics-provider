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
  options: string[];
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
        <Selectoption value={selectValue} onChange={handleChange}>
          {options?.map(option => {
            return <option value={option}>{option}</option>;
          })}
        </Selectoption>
      </SelectLabel>
    </SelectContainer>
  );
};

export default Select;

const SelectContainer = styled.div`
  width: 80%;
  height: 100px;
  margin: 35px auto;
  border: none;
  border-radius: 10px;
  background: rgb(227, 227, 227);
  display: flex;
  align-items: center;
`;
const SelectLabel = styled.label`
  font-size: 25px;
  font-weight: bold;
  margin-left: 30px;
`;

const Selectoption = styled.select`
  margin: 10px;
`;
