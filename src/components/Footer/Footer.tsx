import React, { FC } from 'react';
import styles from './Footer.module.css';
import { ReactComponent as GitHubLogo } from '../../assets/img/github-logo.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/img/linkedin-logo.svg';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h4 className={styles.title}>Thank you for watching my website.</h4>
        <div className={styles.links}>
          <a
            className={styles.link}
            href='https://github.com/ivgrr'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHubLogo />
          </a>
          <a
            className={styles.link}
            href='https://www.linkedin.com/in/ivgrr/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedInLogo />
          </a>
        </div>
      </div>
    </footer>
  );
};
