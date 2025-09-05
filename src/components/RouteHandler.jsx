import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged } from './../helpers/AuthHandler';

const RouteHandler = ({ children, private: isPrivate }) => {
    const logged = isLogged();
    if (isPrivate && !logged) {
        return <Navigate to="/signin" replace />;
    }
    return children;
};

export default RouteHandler;