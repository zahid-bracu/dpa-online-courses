import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import Login from "./Login";
import Registration from "./Registration";

export default function NavBar() {
  return (
    <Navbar bg="dark" style={{color:"white"}} expand="lg">
      <Navbar.Brand href="#home" style={{color:"white"}}>DPA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home" style={{color:"white"}}>Home</Nav.Link>
          <Nav.Link href="/shop" style={{color:"white"}}>Courses</Nav.Link>
          <Nav.Link href="/portfolio" style={{color:"white"}}>Developer's Portfolio</Nav.Link>
          <Nav.Link href="https://github.com/zahid-bracu" style={{color:"white"}}>Developer's Github</Nav.Link>
          <Nav.Link style={{color:"white"}}>
          <Login></Login>
          </Nav.Link>
          <Nav.Link   style={{color:"white"}}>
            <Registration></Registration>
          </Nav.Link>
          <Nav.Link href="/order" style={{color:"white"}}>Cart</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
