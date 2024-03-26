import React from 'react'
import ChatLeft from '../Components/ChatLeft'
import ChatRight from '../Components/ChatRight'

const Home = () => {
  return (
    <div className='row'>
      <div className='col-3'>
        <ChatLeft />
      </div>
      <div className='col-9'>
        <ChatRight/>
      </div>
    </div>
  )
}

export default Home