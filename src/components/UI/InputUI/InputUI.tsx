import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import styles from './InputUI.module.css';

interface IInputUIProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const InputUI: FC<IInputUIProps> = ({ onChange, ...props }) => {
  return <input className={styles.input} onChange={onChange} {...props} />;
};
