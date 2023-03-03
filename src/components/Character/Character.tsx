import React, { FC } from 'react';
import { ICharacter } from '../../api/types';

interface ICharacterProps extends ICharacter {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export const Character: FC<ICharacterProps> = ({ name, image, gender, species, status, type }) => {
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} alt={`${name} image`} />
      <p>{gender}</p>
      <p>{species}</p>
      <p>{status}</p>
      <p>{type}</p>
    </li>
  );
};
