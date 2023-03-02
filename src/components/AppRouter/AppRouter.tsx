import React, { FC } from 'react';
import { routes } from '../../router';
import { Route, Routes } from 'react-router-dom';

export const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={<route.element />} key={route.path}></Route>
      ))}
    </Routes>
  );
};
