import React, { useState } from "react";
import {Form,FormGroup,Input,Button,Container} from "reactstrap";

import authService from "../api/auth.service";





const SingUp=(props)=>{


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role,setRole]=useState('')
    const [message,setMessage] = useState('')
    const [successful,setSuccessful] = useState('')

   

   const handleRegister = (e)=>{

    e.preventDefault();
    setMessage("sending");
    setSuccessful(false)
   console.log(firstName)
   console.log(lastName)
   console.log(email)
   console.log(role)
   console.log(password)
   console.log(message)
   console.log(successful)
   authService.register(firstName,lastName,email,password,role).then(Response => {
     console.log(Response);
     setMessage("successful")
     setSuccessful(true);
     alert("Registration Successfully");
     props.history.push("/");
         },
   error => {
    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message ||error.toString();
    setMessage(resMessage);
  alert(resMessage);  
  }
     );
 }


    return <div className="p-3 mb-2 bg-info text-white"> 
    <div className="container">

<h1 className="text-center my-3"> Register  </h1>
<Form onSubmit={handleRegister}>
   
 <label >First Name</label>
 <Input type="text"  onChange={(e) => {
              setFirstName(e.target.value)
            }}  placeholder="Enter First Name " name="firstname" id="firstname"  maxLength="30" minLength="2" required/>
  
  <label >Last Name</label>
 <Input type="text" onChange={(e) => {
              setLastName(e.target.value)
            }}  placeholder="Enter Last Name" name="firstname" id="firstname" maxLength="30" minLength="2"/>
   
 
 <label >Email</label>
 <Input type="email" onChange={(e) => {
              setEmail(e.target.value)
            }}  placeholder="Enter Email"  name="Email" id="Email" maxLength="50" title="example:abc@gmail.com" required style={{heigh:200}}/>
   
 <label>Password</label>
 <Input type="password" onChange={(e) => {
              setPassword(e.target.value)
            }} 
            placeholder="Enter Password" name="Password" id="Password" required style={{heigh:200}}/>
  
   <label>Select Role</label>
  <select class="form-select" aria-label="Default select example" required onChange={(e)=>{
    setRole(e.target.value)
  }}>
  
  <option value="" selected>Please select one of them</option>
  <option value="CUSTOMER">CUSTOMER</option>
  <option value="DILEVERY">DELIVERY_PERSON</option>
  <option value="VENDOR">VENDOR</option>
  
   </select>

   <Container className="text-center my-3">
      <Button color="success "  outline>Register</Button>
      <Button type ="reset" color="warning ml-3 " outline>Clear</Button>
  </Container>
  </Form>

    </div>
    </div>
}

export default SingUp;