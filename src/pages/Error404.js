import React from 'react';
import { Link } from 'react-router-dom';


const Error404 = () =>{
    return(
        <>
            <h1>Page not found!</h1>

            <Link to="/">Voltar para HOME</Link>
        </>
    );
};

export default Error404;