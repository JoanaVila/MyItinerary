import React, { Component,useState, useRef } from 'react'
import {connect}    from 'react-redux';
import { Image, Overlay, Navbar, Tooltip, Nav } from 'react-bootstrap';
import {logout} from "../store/actions/loginActions";


 class Navigation extends Component {
    
  handleLogout = () =>{
    this.props.logout()
}
     
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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/cities">Cities</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/createaccount">Register</Nav.Link>
                    <Nav.Link onClick={this.handleLogout} href="/">Logout</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
}
export default connect(null, {logout})(Navigation) 

/* import React, { Component } from 'react'
import {Navbar, Nav,Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import {logout} from "../store/actions/loginActions";
import { connect } from 'react-redux';

class Navigation extends Component {
    renderTooltip = () =>{
        return <Tooltip >
            <Nav className="flex-column">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/createaccount">Create Account</Nav.Link>
            </Nav>
        </Tooltip>;  
    }
    
    handleLogout = () =>{
     
        this.props.logout()
    }
    
    render() {
        console.log(localStorage.token)
        const guestLink = (
            
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="cities">Cities</Nav.Link>
                <Nav.Link id = "loginLink" href="login">Login</Nav.Link>
                <Nav.Link id = "createLink" href="createaccount">Create Account</Nav.Link>
            </Nav>
        )
        const userLink = (
            
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="cities">Cities</Nav.Link>
                <Nav.Link onClick={this.handleLogout} href="/">Logout</Nav.Link>
            </Nav>
        )
        
        console.log(guestLink)
        console.log(userLink) 
        const guestImg = (
            <Image src="/images/profile_icon.png"
              roundedCircle 
              height={40} 
              width={40} 
              />
        )
        const userImg = (
            <Image src={this.props.user.profile_pic} 
              roundedCircle 
              height={40} 
              width={40} 
              />
        )
        console.log(guestImg)
        console.log(userImg)
        const Example = (props) => ( 
            
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={this.renderTooltip()}
            > 
              { !localStorage.token ? guestImg : userImg }
            
            </OverlayTrigger>
        );
        return (
            <div>
                <Navbar bg="light" expand="lg">
                      
                    <Example/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        { !localStorage.token ? guestLink : userLink }
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
const mapStatetoProps = (state) => {
    return {
        user: state.auth.user
    }
}
export default connect(mapStatetoProps, {logout})(Navigation) */



