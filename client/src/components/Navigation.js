import React, { Component } from 'react'
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
    
    
    render() {
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
                <Nav.Link onClick={() => this.props.logout()} href="/">Logout</Nav.Link>
            </Nav>
        )
        
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
export default connect(mapStatetoProps, {logout})(Navigation)



