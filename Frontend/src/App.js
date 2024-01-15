import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from './Pages/Shop.jsx';
import ShopCatagory from './Pages/ShopCatagory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCatagory category="men"/>}/>
      <Route path='/womens' element={<ShopCatagory category="women"/>}/>
      <Route path='/kids' element={<ShopCatagory category="kid"/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path=':productId' element={<Product/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

