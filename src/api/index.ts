import { ApiResponse } from './types';

/* API */
const API = 'https://rickandmortyapi.com/api';

const API_CHARACTER_ALL = `${API}/character`;

/* CHARACTER */
export const getLinkCharactersByPage = (page: number) => `${API_CHARACTER_ALL}/?page=${page}`;
export const getLinkCharacterById = (id: number) => `${API_CHARACTER_ALL}/${id}`;
export const getLinkCharactersByName = (name: string) => `${API_CHARACTER_ALL}?name=${name}`;

export const fetchCharactersByName = async (name: string, controller: AbortController) => {
  const data = await fetch(getLinkCharactersByName(name), controller)
    .then<ApiResponse>((data) => data.json())
    .catch((err) => console.error(err));

  if (data) return data;
};
