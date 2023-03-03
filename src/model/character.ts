import { atom, onUpdate, reatomAsync, sleep, withAbort, withDataAtom } from '@reatom/framework';
import { fetchCharacters, fetchSingleCharacter } from '../api';
import { IInfo } from '../api/types';

const infoInitial: IInfo = { count: 0, pages: 0, next: '', prev: '' };

const currentCharacterIdAtom = atom(0, 'currentCharacter');
const searchAtom = atom('', 'searchAtom');
const pageAtom = atom(1, 'pageAtom');
const infoAtom = atom(infoInitial, 'infoAtom');

const fetchSingleCharacterAction = reatomAsync(async (ctx, id) => {
  sleep(400);
  const response = await fetchSingleCharacter(id, ctx.controller);
  if (response) {
    return response;
  }
}, 'fetchSingleCharacterAction').pipe(withDataAtom(null));

const fetchCharactersAction = reatomAsync(async (ctx, name, page) => {
  await sleep(400);
  const response = await fetchCharacters(name, page, ctx.controller);
  if (response) {
    const { info, results } = response;
    infoAtom(ctx, info);
    return results;
  }
}, 'fetchCharactersAction').pipe(withAbort({ strategy: 'last-in-win' }), withDataAtom([]));

const characterController = atom((ctx) => {
  const id = ctx.spy(currentCharacterIdAtom);
  if (id) fetchSingleCharacterAction(ctx, id);
}, 'characterController');

const searchController = atom((ctx) => {
  const search = ctx.spy(searchAtom);
  const page = ctx.spy(pageAtom);
  if (search) fetchCharactersAction(ctx, search, page);
}, 'searchController');

const pageController = atom((ctx) => {
  const search = ctx.spy(searchAtom);
  if (search) pageAtom(ctx, 1);
});

export {
  searchAtom,
  pageAtom,
  infoAtom,
  currentCharacterIdAtom,
  fetchSingleCharacterAction,
  fetchCharactersAction,
  characterController,
  searchController,
  pageController,
};
