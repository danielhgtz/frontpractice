import { useState } from 'react'
import axios from "axios"
import './App.css'
import { appConfig } from './config/appConfig'
import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
// import { setToken } from './auth/authSlice'

function App() {
  const [userData, setUserData] = useState({email:"", name: "", password: ""})
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate(); 
  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post(`${appConfig.server}/create`, userData);
      // console.log(response);
      localStorage.setItem('token', response.data.token );
      navigate('/otro')
      
      
    } catch (error) {
      setErrorMessage(error.response.data);
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }

  }
 

  return (
    <>
    <form className='create-user-form' onSubmit={handleSubmit} >

    <p>Create User</p>

      <input placeholder='Email' type='text'
        onChange={(e)=>{setUserData({...userData, email: e.target.value})}}
      />

      <input placeholder='Name' type='text'
        onChange={(e)=>{setUserData({...userData, name: e.target.value})}}
      />

      <input placeholder='Password' type='text'
        onChange={(e)=>{setUserData({...userData, password: e.target.value})}}
      />
    
    <button type="submit" style={{border:"none"}}>Submit</button>

    </form>
    <p className='create-user-form-errorMessage'>{errorMessage}</p>

    </>
    
  )
}

export default App
