import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import ShowProduct from './ShowProduct';
import ProductDetails from './ProductDetails';
import ShowDetails from './ShowDetails';
import Cart from './Cart';

const Routing = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/showproduct' element={<ShowProduct/>}/>
            <Route path='/productdetails/:id' element={<ProductDetails/>}/>
            <Route path='/showdetails/:category' element={<ShowDetails/>}/>
            <Route path='/cart/:id' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Routing
