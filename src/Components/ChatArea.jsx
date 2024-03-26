import { useState } from 'react'
import React from 'react'

const ChatArea = () => {
  const [message, setMessage] = useState('');
  const [arrivalMsg, setArrivalMsg] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    setArrivalMsg([...arrivalMsg, message])
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className='chat-section'>

      {/* Header */}
      <div className='chat_header'>

        <div className='chat_user_img'>

          <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1711017064~exp=1711020664~hmac=de6a398428b6cc87eb47fd3c9b0dc9e1afe348f0168ed2adeb82ca3b5b569888&w=1380" alt="" />
        </div>
        <p className='chat_user'>
          <h3>Avinash</h3>
          <span>online</span>
        </p>
      </div>

      {/* Chat Area */}
      <div className='container-fluid my-2'>
        {arrivalMsg?.map((e) => (
          <p>message</p>
        ))}</div>

      {/* Chat Footer */}

      <div className='chat_Footer'>
        <form action="" onSubmit={handleSubmit}>

          <input type="text" onChange={handleChange} placeholder='enter text' />

          <button type='submit'>send</button>
        </form>

      </div>

    </div>
  )
}

export default ChatArea