import React, { useContext } from 'react'
import ChatBox from './ChatBox'
import { ApiContext } from './ApiContext'

const ChatRight = () => {
  const {currentChat} = useContext(ApiContext)
  const {userId} = useContext(ApiContext)

  
  return (
    <div>
      <ChatBox currentChat={currentChat} userId={userId}/>
    </div>
  )
}

export default ChatRight