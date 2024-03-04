import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< Updated upstream
import ResponsiveRendering from './components/ResponsiveRendering';
import AccManage from './components/AccManage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AccManage />
  </React.StrictMode>,
);
=======
import ResponsiveRendering from './components/utilities/ResponsiveRendering';
import HomePageD from './components/pages/HomePageD';
import UserPageD from './components/pages/UserPageD';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ResponsiveRendering/>
    </React.StrictMode>,
);

>>>>>>> Stashed changes
