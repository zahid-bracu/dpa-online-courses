import React, { useState, useEffect } from "react";
import "./styles.css";
import Datas from "./Datas";
import Display from "./Display";
import NavBar from "./NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import { addToDatabaseCart, getDatabaseCart } from '../utilities/databaseManager';
import Landing from "./Landing";
import Category from "./Category";


function Shop() {
  
  /*
  declaring the cart variable as array to save & add product
  */
  const [cart,setCart]=useState([]);

  const [course, setCourse] = useState(Datas);

  /* A function that help to add the product into cart while clicking add to cart button
  newly added items are pass through the function parameter*/
  function addCart(item){
    // newly add item join with the other cart value in the array
    var newCart=[...cart,item];

    // check if same item being added more than one times
    const same=newCart.filter(pd=>pd.key===item.key)
    var count=same.length; //check how many times same items are being clicked
    item.count=count;
    // items are saved in database with count
    addToDatabaseCart(item.key,count);
    var tempCart=[...cart,item];
    // Now newly added Item + old Item array are being added to the cart
    setCart(tempCart);
    console.log(tempCart);
  }

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

function onCategoryChange(Category){
  if(Category=="All"){
    var newArr=Datas;
    setCourse(newArr);
  }else{
    console.log(Category);
    var newArr=Datas.filter(pd=> pd.category==Category);
    console.log(newArr);
    setCourse(newArr);
  }
  
}

 
  return (
    <div className="">
      <Category onCategoryChange={onCategoryChange} ></Category>
      <div className="row">
        <div className="col-lg-10 col-md-8 col-sm-6 col-6 main">
          <div className="row">
            {
              course.map((pd) => (<Display key={pd.key}  Datas={pd} addCart={addCart}></Display>))
            }
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
              <Cart cart={cart}></Cart>
          </div>
      </div>
    </div>
  );
}
export default Shop;