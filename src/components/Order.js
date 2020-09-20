import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager';
import Datas from "./Datas";
import FinalCart from './FinalCart';
import OrderDetails from './OrderDetails';
 

const Order = () => {
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
        setCart([]);
        processOrder(cart);
        setFlag(true);
    }


    if(isEmpty(cart) && flag==false){
        return(
                <h3 className="text-center mt-5">There is no Item in the cart</h3>
        )
    }else if(isEmpty(cart) && flag==true){
        return(
            <div >
                <h2 style={{textAlign:"center",marginTop:"100px"}}>Checked Out Successfully</h2>
                <img className="d-block mx-auto mt-5" style={{textAlign:"center"}} src={imgURL} />
            </div>
            
        )
    }else{
        return (
            <div className="row">
                <div className="row col-lg-8 col-md-6 col-sm-6 col-6">
                {
                    
                    cart.map(pd=> <OrderDetails remove={remove} cart={pd}></OrderDetails>)
                }
                </div>
                <div className="col-lg-2 offset-lg-2 col-md-6 col-sm-6 col-6">
                    <FinalCart CheckOut={CheckOut} cart={cart}></FinalCart>
                </div>
            </div>
        );
    }
    
    
};
export default Order;