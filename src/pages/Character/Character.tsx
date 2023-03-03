import React, { FC } from 'react';
import styles from './Character.module.css';
import { useAtom } from '@reatom/npm-react';
import { Characters } from '../../components/Characters/Characters';
import { SearchCharacter } from '../../components/SearchCharacter/SearchCharacter';
import { ButtonUI } from '../../components/UI/ButtonUI/ButtonUI';
import {
  fetchCharactersAction,
  infoAtom,
  pageAtom,
  pageController,
  searchAtom,
} from '../../model/character';
import { scrollTop } from '../../utils';

export const Character: FC = () => {
  const [search] = useAtom(searchAtom);
  const [isLoading] = useAtom((ctx) => ctx.spy(fetchCharactersAction.pendingAtom) > 0);
  const [characters] = useAtom(fetchCharactersAction.dataAtom);
  const [page, setPage] = useAtom(pageAtom);
  const [info] = useAtom(infoAtom);
  useAtom(pageController);

  const onPrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
      scrollTop();
    }
  };

  const onNextClick = () => {
    if (page < info?.pages) {
      setPage(page + 1);
      scrollTop();
    }
  };

  return (
    <section>
      <SearchCharacter />
      {search && <Characters />}
      {!isLoading && search && characters?.length && (
        <div className={styles.buttonContainer}>
          <ButtonUI onClick={onPrevClick}>{'<'}</ButtonUI>
          <span className='pages'>{`${page}/${info?.pages}`}</span>
          <ButtonUI onClick={onNextClick}>{'>'}</ButtonUI>
        </div>
      )}
    </section>
  );
};
