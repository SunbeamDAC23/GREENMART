
import React from 'react';
import ReactDOM from 'react-dom/client';
import Controller from './Controller';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <Controller/>
    
);


