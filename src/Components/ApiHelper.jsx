import axios from "axios"

export const SinginForm = async (name, email, password) => {
   try {
      const res = await axios.post("/user/signin", { name, email, password })
      return res.data
   } catch (error) {
      return error.response.data.message
   }
}

export const LoginForm = async (email, password) => {
   try {
      const res = await axios.post("/user/login", { email, password })
      return res.data
   } catch (error) {
      return error.response.data
   }
}

export const getLeftChatUsers = async (userId) => {
   try {
      const res = await axios.get(`/chat/${userId}`)
      return res.data
   } catch (error) {
      return error.response.data
   }
}

export const getOneUser = async (userId) => {
   try {
      const res = await axios.post("/user/oneUser" , {userId})
      return res.data
   } catch (error) {
      return error.response.data
   }
}

export const getMessages = async (chatId) => {
   const res = await axios.get(`/message/${chatId}`)
   return res.data
}