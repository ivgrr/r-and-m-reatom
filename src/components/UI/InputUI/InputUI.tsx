import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface IInputUIProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const InputUI: FC<IInputUIProps> = ({ onChange, ...props }) => {
  return <input onChange={onChange} {...props} />;
};
