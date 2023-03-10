import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './ButtonUI.module.css';

interface IButtonUIProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

export const ButtonUI: FC<IButtonUIProps> = ({ children, onClick, ...props }) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
