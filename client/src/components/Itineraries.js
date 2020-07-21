import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itinerariesActions";
import { Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Activities from './Activities';
import {togglerFavAction} from "../store/actions/userActions";


class Itineraries extends Component {

    componentDidMount(){
        const id = this.props.location.state.myCity._id
    
        console.log(id)
        
        this.props.fetchItineraries(id)
    }

    handleClick = (id) => {
        console.log(id);
      }

    
    render() {

        
        console.log(this.props)
        const cardStyleCity = {
            color: "white",
                height: 150,
                backgroundImage: "linear-gradient(rgba(22, 0, 0, 0.29), rgba(225, 218, 223, 0.39)), url(" + this.props.location.state.myCity.img + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginTop: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
        }
        const cardStyle = {
            height: 165,
            width: 350,
            borderStyle: "solid", 
            alignText: "justify",
            margin: 10, 

        }

        return (
            <div>
                <div style={cardStyleCity} >
                            {this.props.location.state.myCity.name}
                </div>
                <h5>Available MYtineraries:</h5>
                {this.props.itineraries.map( itinerary => {
                    return (
                        
                        
                        <div key= {itinerary._id}> 
                        <Container style= {cardStyle} >
                            <Row style={{heigh:120}}>
                                <Col xs={3} style={{paddingTop: 25}}>
                                    <img src= {itinerary.profile_pic} width="45" height="45" ></img>
                                    <p>USER</p>
                                </Col>
                                <Col xs={9}>
                                    <Row style={{paddingTop: 10}}>
                                    <h5>{itinerary.title}</h5>
                                    </Row>
                                    <Row style={{width:200}}>
                                        <Col style={{padding: 0}} >
                                        <p>{itinerary.rating}</p>
                                        </Col>
                                        <Col style={{padding: 0}}>
                                        <p>{itinerary.duration}</p>
                                        </Col>
                                        <Col style={{padding: 0}}>
                                        <p>{itinerary.price}</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <p>{itinerary.hashtags}</p>
                                        <button type="button" onClick= {() => togglerFavAction(itinerary)}>Fav</button>
                                    </Row>
                                    
                                </Col>
                            </Row>

                            <Row  style= {{justifyContent:'center', alignItems:'center', height:35, backgroundColor: "#edebeb"}}>
                            <Link to = {{pathname: "activities", state: {myItinerary:itinerary}}}><div>  View All...</div></Link>          
                            </Row>

                        </Container>

                        </div>
                        
                    )
                })}
                <Link to= {{pathname: "cities"}}>Choose another city</Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        itineraries: state.itineraries.itineraries
    }
}

export default connect (mapStateToProps, { fetchItineraries })(Itineraries)
