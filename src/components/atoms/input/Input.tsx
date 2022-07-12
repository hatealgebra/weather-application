import React, { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./input.styled";

function Input({ placeholder, value, onChange, onBlur, onFocus }: InputProps) {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
}

export interface InputProps {
  placeholder: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default Input;
