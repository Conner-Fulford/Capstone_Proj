import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveRendering from './components/ResponsiveRendering';
import AccManage from './components/AccManage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccManage />
  </React.StrictMode>,
);