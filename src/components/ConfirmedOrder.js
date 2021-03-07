import React, {useEffect, useState, useContext} from 'react';
import {UserInfoContext} from '../App';
import './styles.css';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager';
import Datas from "./Datas";
import {
    BrowserRouter as Router,
     
    useHistory
  } from "react-router-dom";
export default function ConfirmedOrder() {
    const [UserInfo, setUserInfo]=useContext(UserInfoContext)
    console.log(UserInfo);

    const [cart,setCart]=useState([]);

    let history = useHistory();
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productkeys=Object.keys(savedCart);
        const values=Object.values(savedCart);
        
        var temp=[];
        for(var i=0;i<values.length;i++){
            temp.push(values[i]);
        }

        
        const finalArr = Datas.filter(pd =>
            productkeys.some(exclude => exclude == pd.key)
        );

        for(var j=0;j<finalArr.length;j++){
            finalArr[j].count=temp[j];
        }
        setCart(finalArr);
    },[])


    console.log(cart)



        var sum=0;
        var total=0;
        for(let i=0;i<cart.length;i++){
            var price=parseFloat(cart[i].price);
            var count=parseFloat(cart[i].count);
            sum+=count;
            total=parseFloat(total+(price*count));
        }

        console.log(total);


        var tax=parseFloat((15*total)/100);
      var mainprice=total+tax;



    return (
        <div className="container">
            <div className="order-info">
                <h4>From
                    <br/> <span className="text-danger">
                    <span className="text-warning">Developers & Programmers</span> Learning Academy</span></h4>
                <h5>Best Programming School</h5>
                <h6>221, Baker Street</h6>
                <h6>Asgard, Kingdom of Nine Realms</h6>
                <ul className="list-unstyled info-list">
                    <li>Name: {UserInfo.name}</li>
                    <li>Business Name: {UserInfo.business}</li>
                    <li>Flat No : {UserInfo.flat}</li>
                    <li>House : {UserInfo.house}</li>
                    <li>Road : {UserInfo.road}</li>
                    <li>City: {UserInfo.city}</li>
                    <li>Mail : {UserInfo.mail}</li>
                    <li>Phone : {UserInfo.phone}</li>
                </ul>
                <h5>Total Payment : <span className="text-danger">{mainprice}$</span></h5>
                <button onClick={()=>history.push('/confirmmsg')} className="btn btn-warning btn-sm mt-1">Confirm Order</button>
            </div>
        </div>
    )
}
