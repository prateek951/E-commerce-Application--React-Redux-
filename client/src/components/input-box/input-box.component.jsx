import React from 'react';
import './input-box.styles.scss';
import { GroupContainer, FormInputContainer, FormInputLabel } from './input-box.styles';

const InputBox = ({ handleChange, label, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel
          htmlFor={otherProps.name}
          className={`${
            otherProps.value.length ? 'shrink' : ' '
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      ) : null}
    </GroupContainer>
  );
};

export default InputBox;
