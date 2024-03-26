import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginForm } from './ApiHelper';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login() {

   const [email, setEmail] = useState(null)
   const [password, setPassword] = useState(null)

   const nav = useNavigate()


   const handleSubmit = async (e) => {
      e.preventDefault()

      if (email !== "" || password !== "") {
         LoginForm(email, password).then(res => {
            console.log(res);

            if (res.status === 1) {
               localStorage.setItem("userId", res?.user?._id)
               toast.success(res.message)
               nav("/home")
            }
            else {
               toast.error(res.message)
            }
         })
      } else {
         toast.error("Please fill all the fields")
      }
   }


   return (
      <div className='container'>

         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" required placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
               Submit
            </Button>

            <Button variant="success" type="submit" onClick={() => nav("/signup")}>
               SignIn
            </Button>
         </Form>
      </div>

   );
}

export default Login;