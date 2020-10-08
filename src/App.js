import React from 'react';
import HttpsRedirect from 'react-https-redirect';


import './App.css';
import MainPage from './pages/MainPage/MainPage';


function App() {
    return (
        <HttpsRedirect>
            <MainPage />
        </HttpsRedirect>
    );
}

export default App;
