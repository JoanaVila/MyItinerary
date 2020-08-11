import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import { Form, FormControl} from "react-bootstrap";
import {authGoogle} from "../store/actions/loginActions";
import Navigation from './Navigation';

class Cities extends Component {

    constructor(props){
        super(props)
        this.state = {
            cities: [],
            filtered: ""            
        }
    }

 
    componentDidMount(){
        const url = this.props.location.search
        this.props.fetchCities()
        if (url !== "") {
           const token = url.split("=")[1]
            this.props.authGoogle(token)
        } 
    }

    handleChange = (e) => {
  
        this.setState({
         filtered: e.target.value
       });
    } 
    
    render() {
        console.log(this.props)
        const searchParam = this.state.filtered.toLowerCase()
        console.log(searchParam)
        const citiesPost = this.props.cities.filter(city => {return city.name.toLowerCase().startsWith(searchParam)}).map(city => {
            const cardStyle = {
                color: "white",
                height: 150,
                backgroundImage: "linear-gradient(rgba(22, 0, 0, 0.29), rgba(225, 218, 223, 0.39)), url(" + city.img + ")",
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginTop: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            
            }
                return (
                    <Link key={city.id} to= {{pathname: "/itineraries", state: { myCity: city}}}>
                        <div >
                        <div  style = { cardStyle } >
                            <h4>{city.name}</h4>      
                    </div>
                    </div>
                    </Link>
                    )       
        })

        
            return (
            <div>
                <Navigation/>
                <p className= "filterParagraph">Filter our current cities</p>
                <Form inline style={{marginBottom: 15}}>
                    <FormControl id = "mySearch" type="text" placeholder="Search" className="mr-sm-2" onChange = {this.handleChange}/>
                </Form>
                <div style={{width: 375, height: 495, overflow: "scroll"}}>
                {citiesPost}
                </div>
                <div className="Footer" style={{width:200, marginLeft: 10}}>
                <Link to= {{pathname: "/"}}><img src="./images/homeIcon.png"  alt="icon" width="30" height="30" style={{float:"right"}}></img></Link>
                </div>
            </div>
            )}};

const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities
    }
}

export default connect(mapStateToProps, { fetchCities, authGoogle })(Cities)
