import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router';
import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';

export const Header: FC = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <Link to={RouteNames.CHARACTER}>
        <Logo />
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to={RouteNames.ABOUT}>
          About
        </Link>
        <Link className={styles.link} to={RouteNames.CHARACTER}>
          Characters
        </Link>
      </div>
    </div>
  </header>
);
