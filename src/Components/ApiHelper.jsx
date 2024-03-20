import axios from "axios"

export const SinginForm = async (name , email, password) => {
   try {
      const res = await axios.post("/user/signin", {name , email, password })
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
      return error.response.data.message
   }
}