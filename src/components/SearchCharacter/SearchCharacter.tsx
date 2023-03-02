import React, { FC } from 'react';
import { Characters } from '../Characters/Characters';
import { useAtom } from '@reatom/npm-react';
import {
  fetchCharactersAction,
  infoAtom,
  pageAtom,
  searchAtom,
  searchController,
} from '../../model/character';
import { ButtonUI } from '../UI/ButtonUI/ButtonUI';
import { InputUI } from '../UI/InputUI/InputUI';

export const SearchCharacter: FC = () => {
  useAtom(searchController);
  const [search, setSearch] = useAtom(searchAtom);
  const [page, setPage] = useAtom(pageAtom);
  const [characters] = useAtom(fetchCharactersAction.dataAtom);
  const [info] = useAtom(infoAtom);
  const [isLoading] = useAtom((ctx) => ctx.spy(fetchCharactersAction.pendingAtom) > 0);

  const onPrevClick = () => {
    if (page > 1) setPage(page - 1);
  };

  const onNextClick = () => {
    if (page < info.pages) setPage(page + 1);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <InputUI type='text' value={search} placeholder='Search Character' onChange={onInputChange} />
      {isLoading && 'Loading...'}
      {!characters?.length && search && !isLoading && 'NotFound'}
      {search && <Characters />}
      {!isLoading && search && characters?.length && (
        <div>
          <ButtonUI onClick={onPrevClick}>{'<'}</ButtonUI>
          <ButtonUI onClick={onNextClick}>{'>'}</ButtonUI>
        </div>
      )}
    </div>
  );
};
