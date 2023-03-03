import { About, Character as CharacterPage } from '../pages';
import { CharacterDetails } from '../components/CharacterDetails/CharacterDetails';

export interface IRoute {
  path: string;
  element: React.ComponentType<any>;
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
