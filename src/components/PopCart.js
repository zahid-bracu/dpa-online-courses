import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Modal
} from "react-bootstrap";
import './styles.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function PopCart(props) {
  
  
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



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="danger" className="mb-4" onClick={handleShow}>
        Click Here to See the Cart
      </Button>

      <Modal size="sm" show={show} className="box" onHide={handleClose}>
        <Modal.Body>
          <Card  className="my-4" style={{position:'sticky',top:'0',width: 'auto',border:'none' }}>
              <Card.Body id="checking">
                  <Card.Title>Cart</Card.Title>
                  <h6 className="my-4">Total Courses: {sum}</h6>
                  <h6 className="my-4">Courses Price: {total}$</h6>
                  <h6 className="my-4">Vat & Tax: 15%</h6>
                  <h6 className="my-4">Total Price: {mainprice}$ </h6>
                  <Link to="/order">
                  <Button className="my-2"  variant="danger" size="sm">Review Product</Button>
                  </Link>
              </Card.Body>
              <Card.Body id="msg" style={{display:"none"}}>
                  <h3 className="text-center"></h3>
              </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
           
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PopCart;