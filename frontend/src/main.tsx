import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import ResponsiveRendering from './components/utilities/ResponsiveRendering';
import HomePageD from './components/pages/HomePageD';
// import HomePageM from './components/pages/HomePageM';
import UserPageD from './components/pages/UserPageD';
import UserPageM from './components/pages/UserPageM';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ResponsiveRendering />
    </React.StrictMode>,
);