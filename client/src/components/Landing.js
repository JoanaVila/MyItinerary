import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Navigation from './Navigation';
import { Carousel, CarouselItem, Image} from 'react-bootstrap';
import { connect } from "react-redux";
import Cities from "./Cities";
import { fetchCities} from "../store/actions/cityActions";
import CarouselCaption from 'react-bootstrap/CarouselCaption';

class Landing extends Component {

    componentDidMount() {
        this.props.fetchCities()
    }
    
    render() {
        let cityArray = this.props.cities.map(element => {
            return element.img
        })

        let cityName = this.props.cities.map(element => {
            return element.name
        })

        return (
            <div>
                <div>
                    <Navigation/>
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
                <div>

                <Carousel>
                    <CarouselItem>
                    <div style= {{display: "flex"}}>  
                    <div
                            className="d-block w-50"
                            style={{backgroundImage: `url(${cityArray[0]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{backgroundColor: "black", fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "white", height: 150, alignItems: "center"}}>{cityName[0]}</h6>
                    </div>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[1]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[1]}</h6>
                    </div>
                    </div>
                    <div style= {{display: "flex"}}>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[2]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[2]}</h6>
                    </div>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[3]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[3]}</h6>
                    </div>
                    </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div style= {{display: "flex"}}>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[4]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[4]}</h6>
                    </div>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[5]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[5]}</h6>
                    </div>
                    </div>
                    <div style= {{display: "flex"}}>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[6]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[6]}</h6>
                    </div>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[7]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[7]}</h6>
                    </div>
                    </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div style= {{display: "flex"}}>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[8]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[8]}</h6>
                    </div>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[9]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[9]}</h6>
                    </div>
                    </div>
                    <div style= {{display: "flex"}}>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[10]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[10]}</h6>
                    </div>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[11]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[11]}</h6>
                    </div>
                    </div>
                    </CarouselItem>
                    <CarouselItem>
                    <div style= {{display: "flex"}}>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[12]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[12]}</h6>
                    </div>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[13]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[13]}</h6>
                        </div>
                    </div>
                    <div style= {{display: "flex"}}>
                    <div
                            className="d-block w-50"
                            style={{backgroundImage:`url(${cityArray[14]})`, backgroundSize: "cover"}} 
                        >
                            <h6 style = {{fontFamily: "Stencil Std, fantasy", paddingTop: 50, fontSize: 35, color: "black", height: 150, alignItems: "center"}}>{cityName[14]}</h6>
                        </div>
                    </div>
                    </CarouselItem>
                </Carousel>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities
    }
}

export default connect(mapStateToProps, {fetchCities})(Landing)