import React, {useEffect, useState, useContext} from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles.css';
// import {addToDatabaseCart, getDatabaseCart} from './databaseManager';
import { useHistory } from "react-router-dom";
import {UserInfoContext} from '../App';
const InformationForm = () => {
    let history = useHistory();
    var [completed,setCompleted]=useState(false);
    var [form,setForm]=useState(false);
    var [flag,setFlag]=useState(false);
    const [UserInfo, setUserInfo]=useContext(UserInfoContext)
     

    function changeFunc(e) {
         
        var infos={...UserInfo};
        infos[e.target.name]=e.target.value;
        setUserInfo(infos);
    }


    function submitFunc(e) {
        setForm(true);
        e.preventDefault();
        console.log(UserInfo)
        setFlag(true)
        history.push('/paymentcard')
         

    }


    return (
        <>   <div className="custom-form d-block mx-auto">
            <h4 className="text-center my-4 font-weight-bold text-dark">Set Delivery Details</h4>
                        
                        <Form onSubmit={submitFunc} className="form-check-out">
                    
                            <Form.Group id="name">
                                <Form.Control onBlur={changeFunc} defaultValue={UserInfo.name} type="text" name="name" id="name" placeholder="Name" required/>
                                <p className="text-danger" id="name-error" style={{display:"none"}}>Enter your name</p>
                            </Form.Group>
                            

                            <Form.Group id="business">
                                <Form.Control onBlur={changeFunc} defaultValue={UserInfo.business} type="text" id="business" name="business" placeholder="Business Name" required/>
                            </Form.Group>

                            <Form.Group id="flat">
                                <Form.Control onBlur={changeFunc} defaultValue={UserInfo.flat} type="text" id="flat" name="flat" placeholder="Flat No." required/>
                            </Form.Group>


                            <Form.Group id="house">
                                <Form.Control onBlur={changeFunc} defaultValue={UserInfo.house} type="text" id="house" name="house" placeholder="House No." required/>
                            </Form.Group>


                            <Form.Group id="road">
                                <Form.Control onBlur={changeFunc} defaultValue={UserInfo.road} type="text" id="road" name="road" placeholder="Road No." required/>
                            </Form.Group>


                            <Form.Group id="city">
                                <Form.Control onBlur={changeFunc} defaultValue={UserInfo.city} type="text" id="city" name="city" placeholder="City" required/>
                            </Form.Group>

                            <Form.Group id="phone">
                                <Form.Control onBlur={changeFunc} defaultValue={UserInfo.phone} type="number" id="phone" name="phone" placeholder="phone" required/>
                                <p className="text-danger" id="phone-error" style={{display:"none"}}>Enter your phone number</p>
                            </Form.Group>

                            
                            
                            <button     className="btn-check-out btn btn-warning font-weight-bold " type="submit">
                                Submit
                            </button>
                        </Form>
            </div></>
    );
};

export default InformationForm;