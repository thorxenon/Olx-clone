import React from 'react';
import { Routes, Route } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads';
import Account from './pages/Account';
import Error404 from './pages/Error404';

const Routes = () =>{


    return (
        <Routes>
            <Route path="/" element={<RouteHandler><Home /></RouteHandler>} />
            <Route path="/about" element={<RouteHandler><About /></RouteHandler>} />
            <Route path="/signin" element={<RouteHandler><SignIn /></RouteHandler>} />
            <Route path="/signup" element={<RouteHandler><SignUp /></RouteHandler>} />
            <Route path="/ad/:id" element={<RouteHandler><AdPage /></RouteHandler>} />
            <Route path="/post-an-ad" element={<RouteHandler private><AddAd /></RouteHandler>} />
            <Route path="/ads" element={<RouteHandler><Ads /></RouteHandler>} />
            <Route path="/user/me" element={<RouteHandler private><Account /></RouteHandler>} />
            <Route path="*" element={<RouteHandler><Error404 /></RouteHandler>} />
        </Routes>
    );
}

export default Routes;