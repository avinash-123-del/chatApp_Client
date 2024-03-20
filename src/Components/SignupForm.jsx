import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginForm, SinginForm } from './ApiHelper';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function SignupForm() {

   const [email, setEmail] = useState(null)
   const [name, setName] = useState(null)
   const [password, setPassword] = useState(null)

   const handleSubmit = async (e) => {
      e.preventDefault()
      if (name !== "" || email !== "" || password !== "") {
         SinginForm(name, email, password).then((res) => {
            toast.success(res)
            console.log("res"  , res);
         })
      }

      else {
         toast.error("Please fill all the fields")
      }
   }

      const nav = useNavigate()

      return (
         <div className='container'>

            <Form onSubmit={handleSubmit}>
               <Form.Group className="mb-3"  controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" required placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
               </Form.Group>

               <Form.Group className="mb-3"  controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" required placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
               </Form.Group>

               <Form.Group className="mb-3"  controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
               </Form.Group>

               <Button variant="primary" type="submit">
                  Submit
               </Button>

               <Button variant="success" type="submit" onClick={() => nav("/")}>
                  login
               </Button>

            </Form>
         </div>

      );
   }

   export default SignupForm;