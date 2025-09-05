import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import AppRoutes from './Routes';


const Page = (props) =>{
  return(
    <BrowserRouter>
      <Template>
        <Header/>

              <AppRoutes/>

        <Footer/>
      </Template>
    </BrowserRouter>
  )
}


export default Page;