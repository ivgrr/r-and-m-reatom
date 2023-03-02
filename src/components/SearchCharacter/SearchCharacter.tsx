import { atom, reatomAsync, sleep, withAbort, withDataAtom } from '@reatom/framework';
import { useAtom } from '@reatom/npm-react';
import React, { FC } from 'react';
import { fetchCharacters } from '../../api';
import { IInfo } from '../../api/types';
import { Characters } from '../Characters/Characters';

const infoInitial: IInfo = { count: 0, pages: 0, next: '', prev: '' };

const searchAtom = atom('', 'searchAtom');
const pageAtom = atom(1, 'pageAtom');
const infoAtom = atom(infoInitial, 'infoAtom');

export const fetchCharactersAction = reatomAsync(async (ctx, name, page) => {
  await sleep(400);
  const response = await fetchCharacters(name, page, ctx.controller);
  if (response) {
    const { info, results } = response;
    infoAtom(ctx, info);
    return results;
  }
}, 'fetchCharactersAction').pipe(withAbort({ strategy: 'last-in-win' }), withDataAtom([]));

const searchController = atom((ctx) => {
  const search = ctx.spy(searchAtom);
  const page = ctx.spy(pageAtom);

  if (search) fetchCharactersAction(ctx, search, page);
}, 'searchController');

export const SearchCharacter: FC = () => {
  useAtom(searchController);
  const [search, setSearch] = useAtom(searchAtom);
  const [page, setPage] = useAtom(pageAtom);
  const [characters] = useAtom(fetchCharactersAction.dataAtom);
  const [info] = useAtom(infoAtom);
  const [isLoading] = useAtom((ctx) => ctx.spy(fetchCharactersAction.pendingAtom) > 0);

  return (
    <div>
      <input
        type='text'
        value={search}
        placeholder='Search Character'
        onChange={(e) => setSearch(e.target.value)}
      />
      {!characters?.length && search && !isLoading && 'Loading...'}
      <ul>
        {search && <Characters />}
        <button
          onClick={() => {
            if (page <= 1) return;
            setPage(page - 1);
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            if (page >= info.pages) return;
            setPage(page + 1);
          }}
        >
          next
        </button>
      </ul>
    </div>
  );
};
