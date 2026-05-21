import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import Cookies from 'js-cookie'


const LoginPage = () => {
  // const userDetails = [
  //   {
  //     username: 'emilys',
  //     password: 'emilyspass'
  //   }
  // ]
  const navigate = useNavigate()
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [errorMsg,setErrorMsg]=useState('')
  const [isError,setIsError]=useState(false)

  const onSubmitSuccess = (jwtToken) =>{
    Cookies.set("jwt_token",jwtToken,{expires:1})
    navigate("/")
  }

  const onSubmitFailure = (error_msg) =>{
    setIsError(true)
    setErrorMsg(error_msg)
  }
  const submitForm = async(e)=>{
    e.preventDefault()
    const userDetails = {username,password}
    const url = 'https://dummyjson.com/auth/login'
    const options = {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(userDetails)
   }

    const response = await fetch(url,options)
    const data = await response.json()
    console.log(response)
    console.log(data)
    if(response.ok === true){
      onSubmitSuccess(data.jwt_token)
    }else{
      onSubmitFailure(data.message)
    }
  }
  return (
    <div className='main'>
      <div className='login-img-banner'>
          <img className='image-container' src='https://res.cloudinary.com/dzbmn3nhw/image/upload/v1778923439/shopping-logo-1_zfbdmq.png' alt='logo'/>
      </div>
      <div className='login-container'>
        <div className='login-heading'>
            <h4>Login</h4>
         </div>
        <div className='form-container'>
          <form onSubmit={submitForm}>
            <label className='label'>UserName</label>
            <input className='input-container' type='text' placeholder='Enter UserName' 
            onChange={(e)=>setUsername(e.target.value)} value={username} />
            <label className='label'>Password</label>
            <input className='input-container' type='password' placeholder='Enter Password'
            onChange={(e)=>setPassword(e.target.value)} value={password} />
            <button className='login-btn' type='submit'>LOGIN</button>
            {isError && <p className='error-Msg'>*{errorMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
