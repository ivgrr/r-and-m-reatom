import React from 'react';
import styles from './CharacterDetails.module.css';
import { useAtom } from '@reatom/npm-react';
import { useParams } from 'react-router-dom';
import {
  characterController,
  currentCharacterIdAtom,
  fetchSingleCharacterAction,
} from '../../model/character';

export const CharacterDetails = () => {
  useAtom(characterController);
  const { id: characterIdParam } = useParams<keyof { id: number }>();
  const [isLoading] = useAtom((ctx) => ctx.spy(fetchSingleCharacterAction.pendingAtom) > 0);
  const [character] = useAtom(fetchSingleCharacterAction.dataAtom);
  const [, setCurrentCharacterId] = useAtom(currentCharacterIdAtom);
  if (characterIdParam) setCurrentCharacterId(+characterIdParam!);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : character && 'id' in character ? (
        <div className={styles.card}>
          <img className={styles.image} src={character.image} alt={`${name} image`} />
          <h3 className={styles.name}>{character.name}</h3>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <p className={styles.gender}>{character.gender}</p>
            </div>
            <div className={styles.infoItem}>
              <p className={styles.species}>{character.species}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>NotFound</div>
      )}
    </>
  );
};
