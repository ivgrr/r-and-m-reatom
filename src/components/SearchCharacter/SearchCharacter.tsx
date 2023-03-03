import React, { FC } from 'react';
import { useAtom } from '@reatom/npm-react';
import { searchAtom, searchController } from '../../model/character';
import { InputUI } from '../UI/InputUI/InputUI';

export const SearchCharacter: FC = () => {
  useAtom(searchController);
  const [search, setSearch] = useAtom(searchAtom);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <InputUI type='text' value={search} placeholder='Search Character' onChange={onInputChange} />
  );
};
