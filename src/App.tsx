import React from 'react';
import './App.css';
import { AppRouter, Header, Footer } from './components';

export const App = () => (
  <div className='App'>
    <Header></Header>
    <main className='main'>
      <AppRouter />
    </main>
    <Footer></Footer>
  </div>
);
