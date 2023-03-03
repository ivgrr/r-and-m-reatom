import { useAtom } from '@reatom/npm-react';
import React from 'react';
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
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={`${character.name} image`} />
          <p>{character.gender}</p>
          <p>{character.species}</p>
          <p>{character.status}</p>
          <p>{character.type}</p>
        </div>
      ) : (
        <div>NotFound</div>
      )}
    </>
  );
};
