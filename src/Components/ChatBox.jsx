import React, { useEffect, useState } from 'react'
import { getMessages, getOneUser } from './ApiHelper'

const ChatBox = ({ currentChat, userId }) => {

    const [oneData, setOneData] = useState({})

    useEffect(() => {
        const check = currentChat?.chatMembers?.find(e => e !== userId)
        getOneUser(check).then(res => { setOneData(res) })
        getMessages(currentChat?._id).then(res => console.log(res))
    }, [currentChat])


    return (
        <div>

            <div className="chatRight container mt-4">

                <img className='profile_img' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1175752393.1711283597&semt=sph" alt="" />
                <div>
                    <p>{oneData?.name}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatBox