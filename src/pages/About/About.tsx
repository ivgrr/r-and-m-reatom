import React, { FC } from 'react';
import styles from './About.module.css';

export const About: FC = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>Look for Rick and Morty characters</h1>
      </div>
    </section>
  );
};
