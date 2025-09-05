import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';
import { isLogged, doLogout } from './../../../helpers/AuthHandler';

const Header = () =>{

    const logged = isLogged();

    const handleLogout = () =>{
        doLogout();
        window.location.href = '/';
    }

    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged && 
                            <>
                                <li>
                                    <Link to="/my-account">Minha conta</Link>
                                </li>

                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>


                                <li>
                                    <Link to="/post-an-ad" className="button">Anunciar</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">login</Link>
                                </li>

                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>

                                <li>
                                    <Link to="/signin" className="button">Anunciar</Link>
                                </li>
                            </>
                        }

                        

                        

                    </ul>
                </nav>
            </div>{/*container*/}
        </HeaderArea>
    );
};

export default Header;