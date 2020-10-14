import React, { Suspense } from 'react';
import HttpsRedirect from 'react-https-redirect';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import './App.css';
import MainPage from './pages/MainPage/MainPage';


const LINKEDIN_URL = "https://www.linkedin.com/in/ruairi-dorrity-438919102/";
const GITHUB_URL = "https://github.com/RuairiD";


function App() {
    return (
        <HttpsRedirect>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <MainPage />}
                        />
                        <Route
                            exact
                            path="/linkedin"
                            component={() => { 
                                window.location.href = LINKEDIN_URL; 
                                return null;
                            }}
                        />
                        <Route
                            exact
                            path="/github"
                            component={() => { 
                                window.location.href = GITHUB_URL; 
                                return null;
                            }}
                        />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </HttpsRedirect>
    );
}

export default App;
