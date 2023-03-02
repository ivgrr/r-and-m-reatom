import { AboutAuthor } from '../pages';
import { Character } from '../pages';

export interface IRoute {
  path: string;
  element: React.ComponentType;
  replace?: boolean;
}

export enum RouteNames {
  CHARACTER = '/',
  ABOUT_AUTHOR = '/aboutAuthor',
  NOT_FOUND = '*',
}

export const routes: IRoute[] = [
  {
    path: RouteNames.CHARACTER,
    element: Character,
  },
  {
    path: RouteNames.ABOUT_AUTHOR,
    element: AboutAuthor,
  },
  {
    path: RouteNames.NOT_FOUND,
    element: Character,
  },
];
