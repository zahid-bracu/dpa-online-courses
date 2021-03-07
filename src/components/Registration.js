import React, { useState, useEffect } from "react";
import {
    Button,
    Modal, Form
  } from "react-bootstrap";

function Registration() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [data,setData]=useState({
      fname:"",
      lname:"",
      email:"",
      password:"",
      confirmPassword:""
    })


    function inputData(event){
      console.log(event.target.name +" : "+event.target.value);
      data[event.target.name]=event.target.value;

    }


    function submitFunc(event){
      event.preventDefault();
      console.log(data)
      if(data.confirmPassword!="" && data.password!="" && data.fname!="" && data.lname!="" && data.email!=""){
        console.log("All ok");
        document.getElementById("err-msg").style.display="none";
      }else{
        console.log("Fill All the field");
        document.getElementById("err-msg").style.display="block";
      }
    }
    
    return (
      <>
        <span  onClick={handleShow}>
          Register
        </span>

        <Form >
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register Here</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <p>* Required Fields</p>
          <Form.Group controlId="formFirstName">
                <Form.Label>First Name*</Form.Label>
                <Form.Control onBlur={inputData} name="fname" type="name" placeholder="Enter First Name" required/>
            </Form.Group>
          
            <Form.Group controlId="formLastName">
                <Form.Label>Last Name*</Form.Label>
                <Form.Control type="name" onBlur={inputData} name="lname" placeholder="Enter Last Name" required/>
            </Form.Group>
            
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address*</Form.Label>
                <Form.Control type="email" onBlur={inputData} name="email" placeholder="Enter email" required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control type="password" onBlur={inputData} name="password" placeholder="Password" required/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirm Password*</Form.Label>
                <Form.Control type="password" onBlur={inputData} name="confirmPassword" placeholder="Password" required/>
            </Form.Group>
            
            <p style={{display:"none"}} id="err-msg" className=" text-danger">Please fill in all the required fields</p>



             
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" onClick={submitFunc} variant="success">
              Register
            </Button>
          </Modal.Footer>
        </Modal>
        </Form>
      </>
    );
  }
  
  export default Registration;