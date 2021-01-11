"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop from './components/IShop';

let shopName='IShop';
let products=require('./products.json');

ReactDOM.render(
    <IShop 
        shopName={shopName}
        products={products}
    />
    , document.getElementById('container') 
);