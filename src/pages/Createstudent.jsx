import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { addprofile } from '../services/AllApi';
import { useNavigate } from 'react-router-dom';

function Createstudent() {
   const nav=useNavigate()
  const [data,setData]=useState({
    name:"",course:"",email:"",phonenumber:"",dob:"", imgUrl:"",address:"",state:"",courseduration:""

  })
  const handleSubmit=async()=>{
    const {name,course,email,phonenumber,dob, imgUrl,address,state,courseduration}=data
    if(!name||!course||!email||!phonenumber||!dob||!imgUrl||!address||!state||!courseduration){
      alert("Enter Valid Input")
    }
    else{
      const result=await addprofile(data)
      console.log(result)
      if(result.status==201){
        alert("Profile Added!!!")
        nav('/')
      }
    }
  
    
  }
  return (
    <>
    <div className='container'>
      <h2>Add Profile</h2>
      <div className='border border-3 p-5 shadow-sm '>
           <Form>
      <Row className="mb-3">
         <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e)=>setData({...data,name:e.target.value})} type="text" placeholder="Enter Student Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e)=>setData({...data,email:e.target.value})} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control onChange={(e)=>setData({...data,phonenumber:e.target.value})} type="phonenumber" placeholder="Enter mob number" />
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image-Url</Form.Label>
          <Form.Control onChange={(e)=>setData({...data,imgUrl:e.target.value})} type="text" placeholder="Enter image url" />
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>DOB</Form.Label>
          <Form.Control onChange={(e)=>setData({...data,dob:e.target.value})} type="date" placeholder="Enter mob number" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control onChange={(e)=>setData({...data,address:e.target.value})} placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select onChange={(e)=>setData({...data,state:e.target.value})} defaultValue="Choose...">
            <option>Choose...</option>
            <option>KERALA</option>
          </Form.Select>
        </Form.Group>

      </Row>
      <Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Course </Form.Label>
          <Form.Select onChange={(e)=>setData({...data,course:e.target.value})} defaultValue="Choose...">
            <option>Choose...</option>
            <option>Full-Stack-Web Development</option>
            <option>Python</option>
            <option>Data Science</option>
            <option>Software Testing</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Course Duration</Form.Label>
          <Form.Select onChange={(e)=>setData({...data,courseduration:e.target.value})} defaultValue="Choose...">
            <option>Choose...</option>
            <option>1year</option>
            <option>6months</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="button">
        Save
      </Button>
    </Form>

      </div>
     
    </div>
    
    </>
  )
}

export default Createstudent