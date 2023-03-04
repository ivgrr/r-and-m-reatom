import { About, Character as CharacterPage } from '../pages';
import { CharacterDetails } from '../components/CharacterDetails/CharacterDetails';
import { ReactNode } from 'react';

export interface IRoute {
  path: string;
  element: React.FunctionComponent<{ children?: ReactNode }>;
  replace?: boolean;
}

export enum RouteNames {
  CHARACTER = '/character',
  CHARACTER_ID = '/character/:id',
  ABOUT = '/',
  NOT_FOUND = '*',
}

export const routes: IRoute[] = [
  {
    path: RouteNames.CHARACTER,
    element: CharacterPage,
  },
  {
    path: RouteNames.CHARACTER_ID,
    element: CharacterDetails,
  },
  {
    path: RouteNames.ABOUT,
    element: About,
  },
  {
    path: RouteNames.NOT_FOUND,
    element: About,
  },
];
