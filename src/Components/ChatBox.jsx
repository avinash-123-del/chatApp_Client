import React, { useContext, useEffect, useState } from 'react'
import { getMessages, getOneUser } from './ApiHelper'

import { format } from 'timeago.js'
import { Button, Form } from 'react-bootstrap'
import { io } from 'socket.io-client'

const ChatBox = ({ currentChat, userId }) => {

   const [oneData, setOneData] = useState({})
   const [arrivalMessage, setArrivalMessage] = useState([])
   const [textVal, setTextVal] = useState("")
   const [checkOnline, setCheckOnline] = useState("offline")
   const [room, setRoom] = useState("")
   const [socket, setSocket] = useState(null)

   useEffect(() => {
      const check = currentChat?.chatMembers?.find(e => e !== userId)
      getOneUser(check).then(res => { setOneData(res) })
      getMessages(currentChat?._id).then(res => { console.log("res", res); setArrivalMessage(res.findChats) })
   }, [currentChat])

   useEffect(() => {
      const newSocket = io("http://localhost:4500");
      setSocket(io("http://localhost:4500"));

      newSocket.on("connect", () => {
         console.log("connected", newSocket.id);
         setRoom(newSocket.id)
         setCheckOnline(`online ${newSocket.id}`)
      });

      return () => {

         setCheckOnline(`offline ${newSocket.id}`)
         newSocket.disconnect();
      };
   }, []);

   useEffect(() => {

      const handleMessage = (data) => {
         console.log("data", data)
         setArrivalMessage(prev => [...prev, data]);
      };

      socket?.on('get_message', handleMessage);

      return () => {
         socket?.off('get_message', handleMessage);
      };
   }, [socket])

   const handleSubmit = (e) => {
      e.preventDefault()
      // setArrivalMessage(arrivalMessage.concat({ senderId: userId, text: textVal }))
      setTextVal("")

      socket.emit("send_message", {
         senderId: userId, text: textVal, socketId: room
      })
   }

   const handleChange = (e) => {
      setTextVal(e.target.value)
   }

   return (
      <div>
         {currentChat ?
            (
               <div>
                  {/* chatHeader */}

                  <div className="chatRight container mt-4">

                     <img className='profile_img' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1175752393.1711283597&semt=sph" alt="" />
                     <div>
                        <p>{oneData?.name}</p>
                     </div>

                     <p>{room}</p>
                     <p>{checkOnline}</p>
                  </div>

                  {/* chat Body */}
                  <div>
                     {arrivalMessage?.map?.((e, i) => (
                        <div key={i} className='container'>
                           <p className={`${e.senderId === userId ? 'chat_right' : 'chat_left'}`}>
                              <p className='chat_design'>{
                                 e.text}
                                 <p className='m-0 d-flex justify-content-end' style={{ fontSize: "10px" }}>
                                    <small className='chat_time'> {format(e.createdAt)}</small>
                                 </p>
                              </p></p>
                        </div>
                     ))}
                  </div>


                  {/*chat Footer*/}
                  <div className='container '>

                     <Form onSubmit={handleSubmit} className='d-flex justify-content-start align-items-center gap-2 position-fixed bottom-0'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           <Form.Control onChange={handleChange} className='send_input' type="text" placeholder="write message" />
                        </Form.Group>

                        <Button type='submit' className='mb-3' variant='primary' >send</Button>
                     </Form>
                  </div>
               </div>
            ) : (
               <p className='conatiner mt-5 w-100 h-100 d-flex flex-column justify-content-center align-items-center fs-2 '>Tag to start conversation</p>
            )
         }
      </div>
   )
}

export default ChatBox