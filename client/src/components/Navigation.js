import React, { Component,useState, useRef } from 'react'
import {connect}    from 'react-redux';
import { Image, Overlay, Navbar, Tooltip, Nav } from 'react-bootstrap';


 class Navigation extends Component {
    
     
    render() {   
      
      function Example() {
        const [show, setShow] = useState(false);
        const target = useRef(null);
      
        return (
          <>
            <Image src="images/profile_icon.png" ref={target} onClick={() => setShow(!show)} roundedCircle height="40" width="40">
              
            </Image>
            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  <Nav>
                  <Nav.Link href="/createaccount">Create Account</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                  </Nav>
                </Tooltip>
              )}
            </Overlay>
          </>
        );
      }
      
     
        return (
            <div>
              <Navbar bg="light" expand="lg">
              <Example/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Cities</Nav.Link>
                    <Nav.Link href="#link">Itineraries</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                    <Nav.Link href="#link">Register</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
export default connect(null)(Navigation);



