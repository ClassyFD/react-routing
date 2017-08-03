import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import Store from './components/Store/Store.js'
import Details from './components/Details/Details.js'
import Checkout from './components/Checkout/Checkout.js'




export default (
<Switch>
    <Route component={Store} path='/' exact>Store</Route>
    <Route component={Details} path='/details/:id'>Details</Route>
    <Route component={Checkout}path='/checkout'></Route>
</Switch>
)