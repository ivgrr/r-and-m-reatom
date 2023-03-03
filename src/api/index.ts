import { ApiResponse, ICharacter, ICharacterError } from './types';

/* API */
const API = 'https://rickandmortyapi.com/api';

const API_CHARACTER_ALL = `${API}/character`;

/* CHARACTER */
const getLinkCharactersByPage = (page: number) => `${API_CHARACTER_ALL}/?page=${page}`;
const getLinkCharacterById = (id: number) => `${API_CHARACTER_ALL}/${id}`;
const getLinkCharacters = (name: string, page: number) =>
  `${API_CHARACTER_ALL}/?page=${page}&name=${name}`;

const fetchCharacters = async (name: string, page: number, controller: AbortController) => {
  const data = await fetch(getLinkCharacters(name, page), controller)
    .then<ApiResponse>((data) => data.json())
    .catch((err) => console.error(err));
  return data;
};

const fetchSingleCharacter = async (id: number, controller: AbortController) => {
  const data = await fetch(getLinkCharacterById(id), controller)
    .then<ICharacter | ICharacterError>((data) => data.json())
    .catch((err) => console.log(err));
  return data;
};

export {
  getLinkCharactersByPage,
  getLinkCharacterById,
  getLinkCharacters,
  fetchCharacters,
  fetchSingleCharacter,
};
