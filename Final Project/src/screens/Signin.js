
import React, { useEffect, useState } from "react";
import {Form,FormGroup,Input,Button,Container} from "reactstrap"
import authService from "../api/auth.service";
import {Link} from 'react-router-dom'
import image from "../images/picnsave.jpg"

  const LoginPage =(props) =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message,setMessage] = useState('')
  const [successful,setSuccessful] = useState('')

  
  const loginHandler=(e)=>{
    e.preventDefault();
    
   console.log(email)
  // console.log(password)
   console.log(message)
   console.log(successful)
   authService.login(email,password).then(Response =>{
     console.log(Response.role);
       
        if(Response.role === 'VENDOR'){
          props.history.push("/vendor");
        }
        if(Response.role === 'CUSTOMER'){
          props.history.push("/home");
        }
        
      //  alert("Login successfully");
       
      
   }//error =>{
      //console.log(error);
      //setMessage(error);
      //setSuccessful(false);
   //}
   ) .catch(err =>{
     alert(new Error("Invalid credentials"));
   })


  }
  const LogoutHandler=()=>{
    
    authService.logout();
}

useEffect(()=>{
 
  LogoutHandler()
  
},[])
  


    return (
      <div className="p-3 mb-2 bg-info text-white">
        <img src={image} className="card-img=top rounded-3" alt="..."/>

 <div className="container" >
  
 <div class="col-md-6">
     <h1 className="text-center my-3">LOGIN</h1>
     
  <Form onSubmit={loginHandler} class="warning">
   <FormGroup>
 <label >Email</label>
 <Input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }} placeholder="Enter your email" autoFocus name="email" id="email" required title="example@email.com"/>
   </FormGroup>
   <FormGroup>
 <label > Password</label>
 <Input  type="password" onChange={(e) => {
              setPassword(e.target.value)
            }}  placeholder="Enter your password" name="Password" id="Password" required/>
   </FormGroup>
  
   <Container className="text-right my-3">
     <table>
       <tr>
         <th>
   <button  class="btn btn-danger" 
      >Login</button></th>
      <th>
    <Link to='/signup'>
   <button type="button" class="btn btn-primary">Register NewUser </button>
   </Link></th></tr> 

   </table>
  </Container>
  
  </Form>
  
  </div>
 </div>
 </div>
    )
}
export default LoginPage;