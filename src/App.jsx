import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import './App.css'

const App = () => {
  return (
    <div>
      <div>
          <Routes>
            <Route path='/loginpage' element={<LoginPage/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Products/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
      </div>
    </div>
  )
}

export default App
