import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

import SignInDM from './components/pages/SignInDM'; // sign IN page for Desktop and Mobile
import SignUpDM from './components/pages/SignUpDM'; // sign UP page for Desktop and Mobile

import HomePageDM from './components/pages/HomePageDM'; // Home page / feed page for Desktop

import UserPageD from './components/pages/UserPageD'; // Profile page for Desktop
import UserPageM from './components/pages/UserPageM'; // Profile page for Mobile



ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        < HomePageDM />
    </React.StrictMode>,
);