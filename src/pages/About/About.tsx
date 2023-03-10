import React, { FC } from 'react';
import styles from './About.module.css';

export const About: FC = () => {
  return (
    <section>
      <div className={styles.container}>
        <h1 className={styles.title}>Look for Rick and Morty characters</h1>
        <h4 className={styles.subtitle}>just click on the characters button</h4>
      </div>
    </section>
  );
};
