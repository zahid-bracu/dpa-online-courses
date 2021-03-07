import React from 'react';
import {
    Card,
    Button
  } from "react-bootstrap";
  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const FinalCart = (props) => {
    console.log(props.cart)

    var sum=0;
      var total=0;
      for(let i=0;i<props.cart.length;i++){
          var price=parseFloat(props.cart[i].price);
          var count=parseFloat(props.cart[i].count);
          sum+=count;
          total=parseFloat(total+(price*count));
      }

      var tax=parseFloat((15*total)/100);
      var mainprice=total+tax;

    return (
        <div>
            <Card  className="my-4" style={{position:'sticky',top:'0',width: 'auto',border:'none' }}>
            <Card.Body id="checking">
                <Card.Title>Cart</Card.Title>
                <p>Total Courses: {sum}</p>
                <p>Courses Price: {total}$</p>
                <p>Vat & Tax: 15%</p>
                <p>Total Price: {mainprice}$ </p>
                <Link to="/informationform">
                <Button onClick={()=>props.CheckOut()} variant="danger" size="sm">Check Out</Button>
                </Link>
            </Card.Body>

            <Card.Body id="msg" style={{display:"none"}}>
                <h3 className="text-center"></h3>
            </Card.Body>
            </Card>
        </div>
    );
};

export default FinalCart;