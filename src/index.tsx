import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { createCtx, connectLogger } from '@reatom/framework';
import { reatomContext } from '@reatom/npm-react';
import { BrowserRouter } from 'react-router-dom';

const ctx = createCtx();
connectLogger(ctx);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <reatomContext.Provider value={ctx}>
        <App />
      </reatomContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
