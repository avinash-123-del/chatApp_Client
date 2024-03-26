import axios from "axios"

export const SinginForm = async (name , email, password) => {
   try {
      const res = await axios.post("/user/signin", {name , email, password })
      return res.data.message
   } catch (error) {
      return error.response.data.message
   }
}

export const LoginForm = async (email, password) => {
   try {
      const res = await axios.post("/user/login", { email, password })
      localStorage.setItem("userId" ,  res.data?.user._id)
      return res.data
   } catch (error) {
      return error.response.data.message
   }
}


export const getAllUsers = async () => {
   try {
      const res = await axios.get("/user/getUsers")
      return res.data.getUsers
   } catch (error) {
      return error.response.data
   }
}

export const conversationList = async (userId) => {
   const res = await axios.get(`/chat/${userId}`)
   return res.data
}

export const getUserbyId = async (userId) => {
   const res = await axios.get(`/getUsersbyId/${userId}`)
   return res.data
}

