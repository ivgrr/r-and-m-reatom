import { About } from '../pages';
import { Character } from '../pages';

export interface IRoute {
  path: string;
  element: React.ComponentType;
  replace?: boolean;
}

export enum RouteNames {
  CHARACTER = '/character',
  ABOUT = '/',
  NOT_FOUND = '*',
}

export const routes: IRoute[] = [
  {
    path: RouteNames.CHARACTER,
    element: Character,
  },
  {
    path: RouteNames.ABOUT,
    element: About,
  },
  {
    path: RouteNames.NOT_FOUND,
    element: Character,
  },
];
