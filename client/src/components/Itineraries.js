import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itinerariesActions";
import { Container, Row, Col} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Activities from './Activities';
import { fetchFavourites} from "../store/actions/userActions";
import { BsFillHeartFill } from 'react-icons/bs';
import { addFavourites} from "../store/actions/userActions";
import { removeFavourites} from "../store/actions/userActions";
import {fetchComments} from "../store/actions/commentActions";
import {getOneCity} from "../store/actions/cityActions";


class Itineraries extends Component {
    constructor(props){
        super(props);
        this.state={
        addedfav: []
       }} 
    

    componentDidMount(){

        if (this.props.city._id !== undefined) {
            this.props.fetchItineraries(this.props.city._id)
            this.props.getOneCity(this.props.city._id)
        }
        else{
            this.props.fetchItineraries(this.props.location.state.myCity._id)
            this.props.getOneCity(this.props.location.state.myCity._id)
        }
         
    }

    componentWillMount() {
        if(localStorage.token) {
            this.props.fetchFavourites()
        }  
    }

    handleClick = (id) => {
        console.log(id)
       if(!localStorage.token) {
           alert("You must be logged in to add a favourite.")
           this.props.history.push("/login")
       } 
       else{
        let fav =  this.props.favourites.filter(favourite => favourite.itineraryID === id)
       console.log(fav)
        if (fav.length === 0) {
                this.props.addFavourites(id)
        }
        else {
            this.props.removeFavourites(id)
            let myIndex = this.state.addedfav.indexOf(id)
            this.state.addedfav.splice(myIndex,1)
        }
       }   
      }
    render() {
        console.log(this.props)
        const cardStyleCity = {
            color: "white",
                height: 150,
                backgroundImage: "linear-gradient(rgba(22, 0, 0, 0.29), rgba(225, 218, 223, 0.39)), url(" + this.props.city.img + ")",
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

        if(this.props.favourites !== undefined) {
            this.props.favourites.map(fav => {
                if(!this.state.addedfav.includes(fav.itineraryID)){
                    this.state.addedfav.push(fav.itineraryID)  
                }
            })
        }
        let itn = this.props.itineraries.map( itinerary => {
            let button; 
            if(this.state.addedfav.includes(itinerary._id)){
                button =  (<div type="button"  onClick= {() => this.handleClick(itinerary._id)}><BsFillHeartFill color= "red"/></div>)
            }
            else {
                button= (<div type="button"  onClick= {() => this.handleClick(itinerary._id)}><BsFillHeartFill color= "grey"/></div>)
            }
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
                            <Row style={{width:250}}>
                                <Col style={{padding: 0}}>
                                <p>{itinerary.hashtags}</p>
                                </Col>
                                <Col style={{padding: 0}}>
                                {button}
                                </Col>
                                
                            </Row>
                            
                        </Col>
                    </Row>

                    <Row  style= {{justifyContent:'center', alignItems:'center', height:35, backgroundColor: "#edebeb"}}>
                    <Link to = {{pathname: "activities", state: {myItinerary:itinerary}}}><div>  View All...</div></Link>          
                    </Row>

                </Container>

                </div>
                
            )
        })

        console.log(this.props)
        
        console.log(this.state.addedfav)
        return (
            <div>
                <div style={cardStyleCity} >
                            {this.props.city.name}
                </div>
                <h5>Available MYtineraries:</h5>

                {itn}
                <Link to= {{pathname: "cities"}}>Choose another city</Link>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({

    itineraries: state.itineraries.itineraries,
    favourites: state.userfavs.favouritesItn,
    city: state.cities.city
})

export default connect (mapStateToProps, { fetchItineraries , addFavourites ,  fetchFavourites, removeFavourites, getOneCity})(Itineraries)
