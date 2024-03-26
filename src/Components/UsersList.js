import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { conversationList, getUserbyId } from './ApiHelper'

const UsersList = () => {

  const [allUsers, setAllUsers] = useState([])
  const userId = localStorage.getItem("userId")

console.log("userId");
console.log("userId" , userId);
  useEffect(() => {
    conversationList(userId).then(res =>{ 
      console.log("res" , res);
      const usersId = res?.chatMembers?.find((e) => e !== userId)
      console.log("usersId", usersId);
      // getUserbyId(usersId).then(res => {console.log("res"  , res);})
      })
  }, [userId])


  return (
    <div>
      <h3 className='text-center my-1 user_head'>Users</h3>
      <ul>

        {allUsers?.map((user) => (
          <li className='user_list'>
            <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1711017064~exp=1711020664~hmac=de6a398428b6cc87eb47fd3c9b0dc9e1afe348f0168ed2adeb82ca3b5b569888&w=1380" alt="" />

            <p>{user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList