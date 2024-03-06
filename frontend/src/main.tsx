import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
//import AccManage from './components/AccManage';
import ResponsiveRendering from './components/utilities/ResponsiveRendering';
//import HomePageD from './components/pages/HomePageD';
//import UserPageD from './components/pages/UserPageD';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ResponsiveRendering/>
    </React.StrictMode>,
);

