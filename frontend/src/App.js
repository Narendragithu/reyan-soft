import logo from './logo.svg';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Nav from './components/Nav';
import ProductDescription from './screens/ProductDescription';
import { Route, Routes } from 'react-router-dom';
// import Cart from './components/Cart';
import Signup from './components/Signup'
import { store } from './redux/store'
import {Provider} from 'react-redux'
import CartScreen from './screens/CartScreen';
import Login from './components/Login';

// import { useEffect } from 'react';
// import { getAllProducts } from './redux/actions/productActons';
// import { useState } from 'react';

function App() {
  
  
  
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/product/:id' element={<ProductDescription />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/cart' element={<CartScreen/>} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
