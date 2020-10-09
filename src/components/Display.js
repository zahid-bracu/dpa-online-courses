import React, { useState } from "react";
import "./styles.css";
import {
  Card,
  Button
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';


export default function Display(props) {

  
  const {name,key,tag,img}=props.Datas;
  
  const [price,setPrice]=useState();
  function setPrices(value,event){
     
    if(price==null){
      var newValue=value+"$";
      setPrice(newValue);
      event.target.innerText="Hide Price";
    }else{
      var temp=null;
      setPrice(temp);
      event.target.innerText="Show Price";
    }
  }

  return (
      <Card className="mx-auto col-lg-6 col-md-6 col-sm-12 col-12 my-2" style={{maxWidth: '18rem' }}>
        <Card.Img variant="top" src={img} />
          <Card.Body>
            
              <Card.Title id="detailsButton" style={{cursor:"pointer"}} onClick={()=>console.log("Item Checked")}><Link to={"/CourseDetails/"+key}>{name}</Link></Card.Title>
                <Card.Text>
                  {tag}
                </Card.Text>
                <Card.Text>
                <h6>{price}</h6>
                </Card.Text>
              
                <Button   onClick={(event)=>setPrices(props.Datas.price,event)} className="my-2" style={{display:"block"}} variant="info" size="sm">Show Price</Button>
                <Button   onClick={()=> props.addCart(props.Datas)} variant="secondary" size="sm">Add to Cart</Button>
          </Card.Body>
      </Card>
  );
}
