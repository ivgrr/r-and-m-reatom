import { useAtom } from '@reatom/npm-react';
import React, { FC } from 'react';
import { fetchCharactersAction } from '../../model/character';

export const Characters: FC = () => {
  const [characters] = useAtom(fetchCharactersAction.dataAtom);
  return (
    <ul>
      {characters?.map(({ id, name, image, gender, species, status, type }) => (
        <li key={id}>
          <h2>{name}</h2>
          <img src={image} alt='' />
          <p>{gender}</p>
          <p>{species}</p>
          <p>{status}</p>
          <p>{type}</p>
        </li>
      ))}
    </ul>
  );
};
