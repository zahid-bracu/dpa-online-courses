import React from 'react';
import {
    Card,
    Button
  } from "react-bootstrap";
  import {
    BrowserRouter as Router,
    Link,
  } from 'react-router-dom';

const OrderDetails = (props) => {
    const {name,price,img,details,key,tag}=props.cart;
    return (
        <Card className=" col-lg-6 col-md-6 col-sm-12 col-12 m-4" style={{maxWidth: '18rem' }}>
        <Card.Img variant="top" src={img} />
          <Card.Body>
            
              <Card.Title id="detailsButton" style={{cursor:"pointer"}} onClick={()=>console.log("Item Checked")}><Link to={"/CourseDetails/"+key}>{name}</Link></Card.Title>
                <Card.Text>
                  {tag}
                </Card.Text>
                <Card.Text>
                <h6>{price}$</h6>
                </Card.Text>
                <Button onClick={()=>props.remove(key)}>Remove Item</Button>
          </Card.Body>
        </Card>
    );
};

export default OrderDetails;