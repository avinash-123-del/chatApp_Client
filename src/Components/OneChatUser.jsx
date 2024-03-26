import React, { useEffect, useState } from 'react'
import { getOneUser } from './ApiHelper'

const OneChatUser = ({ data }) => {

    const [userData, setUserData] = useState({})

    useEffect(() => {
        getOneUser(data).then(res => { setUserData(res) })
    }, [data])


    return (
        <div className="leftChat container mt-4">

            <img className='profile_img' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.1175752393.1711283597&semt=sph" alt="" />
            <div>
                <p>{userData?.name}</p>
            </div>

        </div>
    )
}

export default OneChatUser