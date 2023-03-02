import { atom, reatomAsync, sleep, withAbort, withDataAtom } from '@reatom/framework';
import { fetchCharacters } from '../api';
import { IInfo } from '../api/types';

const infoInitial: IInfo = { count: 0, pages: 0, next: '', prev: '' };

const searchAtom = atom('', 'searchAtom');
const pageAtom = atom(1, 'pageAtom');
const infoAtom = atom(infoInitial, 'infoAtom');

const fetchCharactersAction = reatomAsync(async (ctx, name, page) => {
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

export { searchAtom, pageAtom, infoAtom, fetchCharactersAction, searchController };
