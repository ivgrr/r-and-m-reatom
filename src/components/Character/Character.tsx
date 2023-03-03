import React, { FC } from 'react';
import styles from './Character.module.css';
import { Link } from 'react-router-dom';
import { ICharacter } from '../../api/types';
import { RouteNames } from '../../router';

interface ICharacterProps extends ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export const Character: FC<ICharacterProps> = ({ id, name, image, gender, species, status }) => {
  return (
    <li className={styles.card}>
      <Link to={`${RouteNames.CHARACTER}/${id}`}>
        <img className={styles.image} src={image} alt={`${name} image`} />
      </Link>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.info}>
        <div className={styles.infoItem}>
          <p className={styles.gender}>{gender}</p>
        </div>
        <div className={styles.infoItem}>
          <p className={styles.species}>{species}</p>
        </div>
        <div className={styles.infoItem}>
          <p className={styles.status}>{status}</p>
        </div>
      </div>
    </li>
  );
};
