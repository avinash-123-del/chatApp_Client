import React, { useContext, useEffect, useState } from 'react'
import { getLeftChatUsers } from './ApiHelper'
import OneChatUser from './OneChatUser'
import { ApiContext } from './ApiContext'

const ChatLeft = () => {

  const [users, setUsers] = useState([])
  const [data, setData] = useState()
  const {currentChat , setCurrentChat} = useContext(ApiContext)

  const userId = localStorage.getItem("userId")

  useEffect(() => {
    getLeftChatUsers(userId).then(async (res) => {
      setUsers(res)
      const oneUser = res?.map((data) => (
        data?.chatMembers?.find(id => id !== userId)
        ))
      setData(oneUser)
    })
  }, [userId ])

  return (
    <div >
      {
        users.map((user , index) => (
          <div key={user._id} onClick={() => setCurrentChat(user)}>
            <OneChatUser data={data[index]} />
            <hr className='bg-danger'/>
          </div>
        ))
      }
    </div>

  )
}

export default ChatLeft