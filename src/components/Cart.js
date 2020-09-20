import React from "react";
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

  
function Cart(props){
    
    
     

    const newCart = props.cart.reduce((acc, current) => {
        const x = acc.find(item => item.key === current.key);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
       

      var sum=0;
      var total=0;
      for(let i=0;i<newCart.length;i++){
          var price=parseFloat(newCart[i].price);
          var count=parseFloat(newCart[i].count);
          sum+=count;
          total=parseFloat(total+(price*count));
      }

      var tax=parseFloat((15*total)/100);
      var mainprice=total+tax;


    return(
        <Card  className="my-4" style={{position:'sticky',top:'0',width: 'auto',border:'none' }}>
            <Card.Body id="checking">
                <Card.Title>Cart</Card.Title>
                <p>Total Courses: {sum}</p>
                <p>Courses Price: {total}$</p>
                <p>Vat & Tax: 15%</p>
                <p>Total Price: {mainprice}$ </p>
                <Link to="/order">
                <Button  variant="danger" size="sm">Review Product</Button>
                </Link>
                
            </Card.Body>

            <Card.Body id="msg" style={{display:"none"}}>
                <h3 className="text-center"></h3>
            </Card.Body>
        </Card>

    )
}

export default Cart;