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
  const [currentCharacterId, setCurrentCharacterId] = useAtom(currentCharacterIdAtom);
  if (characterIdParam) setCurrentCharacterId(+characterIdParam);
  // const getCurrentCharacter = (id: number) => {
  //   const character = characters?.filter((character) => character.id === id).at(0);
  //   return character;
  // };

  return (
    <div>
      {/* <h2>{name}</h2>
      <img src={image} alt={`${name} image`} />
      <p>{gender}</p>
      <p>{species}</p>
      <p>{status}</p>
      <p>{type}</p> */}
    </div>
  );
};
