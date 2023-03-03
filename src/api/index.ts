import { ApiResponse, ICharacter } from './types';

/* API */
const API = 'https://rickandmortyapi.com/api';

const API_CHARACTER_ALL = `${API}/character`;

/* CHARACTER */
export const getLinkCharactersByPage = (page: number) => `${API_CHARACTER_ALL}/?page=${page}`;
export const getLinkCharacterById = (id: number) => `${API_CHARACTER_ALL}/${id}`;
export const getLinkCharacters = (name: string, page: number) =>
  `${API_CHARACTER_ALL}/?page=${page}&name=${name}`;

export const fetchCharacters = async (name: string, page: number, controller: AbortController) => {
  const data = await fetch(getLinkCharacters(name, page), controller)
    .then<ApiResponse>((data) => data.json())
    .catch((err) => console.error(err));
  return data;
};

export const fetchSingleCharacter = async (id: number, controller: AbortController) => {
  const data = await fetch(getLinkCharacterById(id), controller)
    .then<ICharacter>((data) => data.json())
    .catch((err) => console.log(err));
  return data;
};
