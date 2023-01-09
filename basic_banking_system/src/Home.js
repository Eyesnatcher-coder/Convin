import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import banksvg from "./4-account.svg";
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";



const Home = () => {
  const navigates = useNavigate();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={banksvg} alt="imaged" style={{ width: "43px", backgroundColor: "white", padding: "3px", margin: "5px", borderRadius: "20px" }}></img>MeraBank</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => {navigates("/")}} >Home</Nav.Link>
              <Nav.Link onClick={() => {navigates("/customer")}} >Customers</Nav.Link>
              <Nav.Link onClick={() => {navigates("/transaction_history")}} >Transaction History</Nav.Link>
            </Nav>
            <Nav style={{ display: "block" }}>
              <div><Navbar.Text>A Bank you can Trust on !</Navbar.Text></div>
              <div><Navbar.Text style={{ fontSize: "xx-small", marginLeft: "50px" }}>Developed by- Harsh Kanojia</Navbar.Text></div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Home;


