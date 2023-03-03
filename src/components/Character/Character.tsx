import React, { FC } from 'react';
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

export const Character: FC<ICharacterProps> = ({
  id,
  name,
  image,
  gender,
  species,
  status,
  type,
}) => {
  return (
    <li>
      <h2>{name}</h2>
      <Link to={`${RouteNames.CHARACTER}/${id}`}>
        <img src={image} alt={`${name} image`} />
      </Link>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{status}</p>
      <p>{type}</p>
    </li>
  );
};
