export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: IOrigin;
  location?: Location;
  image: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface ICharacterError {
  error: string;
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ApiResponse {
  info: IInfo;
  results: ICharacter[];
}
