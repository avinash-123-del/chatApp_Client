import React from 'react'
import UsersLists from '../Components/UsersList.js'
import ChatArea from '../Components/ChatArea'


const Home = () => {
   return (
      <div className='col-lg-12 d-flex'>
         <div className='col-lg-3 users-list' >
            <UsersLists />
         </div>
         <div className='col-lg-6 chat-area'>
            <ChatArea />
         </div>
      </div>
   )
}

export default Home