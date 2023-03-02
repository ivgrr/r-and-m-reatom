import { atom, onUpdate, reatomAsync, withAbort, withDataAtom } from '@reatom/framework';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { FC } from 'react';
import { fetchCharactersByName } from '../../api';

const searchAtom = atom('', 'searchAtom');

const fetchCharactersAction = reatomAsync(async (ctx, query) => {
  const response = await fetchCharactersByName(query, ctx.controller);
  if (response) {
    const { results: data } = response;
    return data;
  }
}).pipe(withAbort({ strategy: 'last-in-win' }), withDataAtom([]));

onUpdate(searchAtom, fetchCharactersAction);

export const SearchCharacter: FC = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const [characters] = useAtom(fetchCharactersAction.dataAtom);
  const [isLoading] = useAtom((ctx) => ctx.spy(fetchCharactersAction.pendingAtom) > 0);

  return (
    <div>
      <input
        type='text'
        value={search}
        placeholder='Search Character'
        onChange={(e) => setSearch(e.target.value)}
      />
      {!characters?.length && isLoading && 'Loading...'}
      {search && !isLoading && !characters?.length && 'Not Found'}
      <ul>
        {search &&
          characters?.map(
            ({ id, name, image, created, episode, gender, species, status, type, url }) => (
              <li key={id}>
                <h2>{name}</h2>
                <img src={image} alt='' />
                <p> {gender}</p>
                <p>{species}</p>
                <p>{status}</p>
                <p>{type}</p>
              </li>
            ),
          )}
      </ul>
    </div>
  );
};
