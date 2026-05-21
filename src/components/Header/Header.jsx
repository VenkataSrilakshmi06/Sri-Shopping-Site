import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { IoIosLogOut } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const onClickLogout = () =>{
    navigate('../loginpage')
  }
  return (
    <div>
      <nav>
        <div className='nav-bar' >
            <img className="website-logo" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"/>
            <ul className='unorder-list'>
              <li><Link to='/' className='nav-link' ><FaHome className='icon'/>Home</Link></li>
              <li><Link to='/product' className='nav-link' ><AiOutlineProduct className='icon' />Product</Link></li>
              <li><Link to='/cart'className='nav-link' ><FaShoppingCart className='icon' />Cart</Link></li>
            </ul>
            <button type='button' className='logout-btn-desktop' onClick={onClickLogout} >LOGOUT</button>
        </div>
        <div className='nav-bar-mobile'>
          <div className='nav-bar-logo-continer'>
              <img className="website-logo-mobile" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="website logo"/>
              <button type='button' className='logout-btn-mobile' onClick={onClickLogout} ><IoIosLogOut/></button>
          </div>
            <ul className='unorder-list-mobile'>
              <li><FaHome className='icon-mobile'/></li>
              <li><AiOutlineProduct className='icon-mobile' /></li>
              <li><FaShoppingCart className='icon-mobile' /></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
