import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Routes  } from 'react-router-dom';
import Login from './Components/LoginForm';
import axios from 'axios';
import SignupForm from './Components/SignupForm';

const App = () => {

  axios.defaults.baseURL = "http://localhost:4500/"

  return (
    <div className=''>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignupForm />} />
        </Routes>
    </div>
  )
}

export default App