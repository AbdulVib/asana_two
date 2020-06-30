import React, { useReducer } from "react";

import 'babel-polyfill';

import './App.css'
//route
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ContextProvider from './store/context/contextProvider'


//partisls
import Navbar from '../components/partials/navbar/Navbar'
//pages
import Home from '../containers/pages/home/Home'

const App = () => {

  return (
    <div>
        <ContextProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={ Home }/>
                <Route component={ Home }/>
            </Switch>
          </BrowserRouter>
        </ContextProvider>
    </div>
  );
};

export default App; 
