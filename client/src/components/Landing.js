import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Navbar, NavItem, DropdownButton}  from "react-bootstrap";
import Navigation from './Navigation';


 export default class Landing extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <Navigation/>
                {/* <Navbar bg="light" variant="light">
                    <div className= "navBar">
                    <Navbar.Brand href="#profileIcon">
                    <img
                        alt=""
                        src="./images/profile_icon.png"
                        width="40"
                        height="40"
                        className="profile_icon"
                    />{' '}
                    </Navbar.Brand>
                    <img
                        alt=""
                        src="./images/menu_icon.png"
                        width="40"
                        height="40"
                        className="menu_icon"
                    />{' '} 
                    </div> 
                </Navbar> */}
                </div>   
                <div className = "Home-page">
                    <img src="./images/MYtineraryLogo.png" className="App-logo" alt="logo" ></img>
                </div>
                    
                
                <div className="Browsing">
                    <p >Find your perfect trip, designed by insiders who know and love their cities.</p>
                
                    <h2>Start browsing</h2>
                
                <div>
                    
                    <Link to= {{pathname: "cities"}}><img src= "./images/circled-right-2.png" alt="start" width="100" height="100"></img></Link>
                </div>

                </div>
                </div>
        )
    }
}

