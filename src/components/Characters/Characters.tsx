import { useAtom } from '@reatom/npm-react';
import React, { FC } from 'react';
import { fetchCharactersAction, searchAtom } from '../../model/character';
import { Character } from '../Character/Character';

export const Characters: FC = () => {
  const [characters] = useAtom(fetchCharactersAction.dataAtom);
  const [isLoading] = useAtom((ctx) => ctx.spy(fetchCharactersAction.pendingAtom) > 0);
  const [search] = useAtom(searchAtom);
  return (
    <>
      {isLoading && 'Loading...'}
      {!characters?.length && search && !isLoading && 'NotFound'}
      <ul>
        {characters?.map(({ id, name, image, gender, species, status, type }) => (
          <Character
            key={id}
            id={id}
            name={name}
            image={image}
            gender={gender}
            species={species}
            status={status}
            type={type}
          />
        ))}
      </ul>
    </>
  );
};
