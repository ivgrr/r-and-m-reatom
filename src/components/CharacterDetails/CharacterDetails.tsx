import React, { FC } from 'react';
import styles from './CharacterDetails.module.css';
import { useAtom } from '@reatom/npm-react';
import { useParams } from 'react-router-dom';
import {
  characterController,
  currentCharacterIdAtom,
  fetchSingleCharacterAction,
} from '../../model/character';

export const CharacterDetails: FC = () => {
  useAtom(characterController);
  const { id: characterIdParam } = useParams<keyof { id: number }>();
  const [isLoading] = useAtom((ctx) => ctx.spy(fetchSingleCharacterAction.pendingAtom) > 0);
  const [character] = useAtom(fetchSingleCharacterAction.dataAtom);
  const [, setCurrentCharacterId] = useAtom(currentCharacterIdAtom);
  if (characterIdParam) setCurrentCharacterId(+characterIdParam);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : character && 'id' in character ? (
        <div className={styles.container}>
          <div className={styles.card}>
            <img className={styles.image} src={character.image} alt={`${character.name} image`} />
            <h3>{character.name}</h3>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <p className={styles.gender}>{character.gender}</p>
              </div>
              <div className={styles.infoItem}>
                <p className={styles.species}>{character.species}</p>
              </div>
              <div className={styles.infoItem}>
                <p className={styles.status}>{character.status}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>NotFound</div>
      )}
    </>
  );
};
