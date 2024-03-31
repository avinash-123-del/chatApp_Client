import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Routes } from 'react-router-dom';
import Login from './Components/LoginForm';
import axios from 'axios';
import SignupForm from './Components/SignupForm';
import Home from './Pages/Home';
import './index.css'
import { io } from 'socket.io-client'
import { ApiContext } from './Components/ApiContext';

const App = () => {

  axios.defaults.baseURL = "http://localhost:4500"

  const { setRoom , setSocket , setCheckOnline} = useContext(ApiContext)

  //  useEffect(() => {
  //   const newSocket = io("http://localhost:4500");

  //   newSocket.on("connect", () => {
  //     console.log("connected", newSocket.id);
  //     setRoom(newSocket.id)
  //     setCheckOnline(`online ${newSocket.id}`)
  //   });

  //   return () => {
      
  //     newSocket.disconnect();
  //     setCheckOnline(`offline ${newSocket.id}`)
  //   };
  // }, []);

  // useEffect(() => {
  //   setSocket(io("http://localhost:4500"));
  // }, []);

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignupForm />} />
      </Routes>
    </div>
  )
}

export default App