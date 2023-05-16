import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LayoutMain, LayoutLogin } from './layout';
import CssBaseline from '@mui/material/CssBaseline';
import { Login, Home } from './pages';

const CodeLeapApp = () => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <CssBaseline>
                    <Routes>
                        <Route path='/'
                            element={
                                <LayoutMain>
                                    <Home />
                                </LayoutMain>
                            } />
                        <Route path='/login'
                            element={
                                <LayoutLogin>
                                    <Login />
                                </LayoutLogin>
                            } />
                    </Routes>
                </CssBaseline>
            </React.StrictMode>
        </BrowserRouter>
    );
};

export default CodeLeapApp;