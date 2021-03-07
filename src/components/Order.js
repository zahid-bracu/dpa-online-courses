import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager';
import Datas from "./Datas";
import FinalCart from './FinalCart';
import OrderDetails from './OrderDetails';
import {
    BrowserRouter as Router,
     
    useHistory
  } from "react-router-dom";

const Order = () => {
    let history = useHistory();
    const imgURL="https://i.ibb.co/s5Lwy8D/faraway-580.gif";
    const [flag,setFlag]=useState(false);

    
    const [cart,setCart]=useState([]);
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
    console.log(cart);

    function remove(key){
        console.log(key);
        var newCart=cart.filter(pd=> pd.key!=key);
        removeFromDatabaseCart(key);
        setCart(newCart);
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    function CheckOut(){
        console.log("Button Working")
         

    }


    if(isEmpty(cart) && flag==false){
        return(
                <h3 className="text-center mt-5">There is no Item in the cart</h3>
        )
    }else if(isEmpty(cart) && flag==true){
        return(
            <div >
                <h2 style={{textAlign:"center",marginTop:"60px"}} className="text-danger">Congratulations !!!</h2>
                <h3 style={{textAlign:"center"}}>Your Order Has Been Confirmed</h3>
                <img className="d-block mx-auto mt-2" style={{textAlign:"center",width:"90%",maxWidth:"600px"}} src={imgURL} />
            </div>
            
        )
    }else{
        return (
            <div className="row">
                <div className="col-lg-2 offset-lg-2 col-md-3 col-sm-12 col-12">
                    <FinalCart CheckOut={CheckOut} cart={cart}></FinalCart>
                </div>
                
                <div className="row col-lg-8 col-md-9 col-sm-12 col-12">
                {
                    
                    cart.map(pd=> <OrderDetails remove={remove} cart={pd}></OrderDetails>)
                }
                </div>
                
            </div>
        );
    }
    
    
};
export default Order;