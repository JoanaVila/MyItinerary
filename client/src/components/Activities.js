import React, { Component } from 'react'
import { connect } from "react-redux"
import { fetchActivities } from "../store/actions/activitiesActions"
import { Row, Col, Carousel} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Activities extends Component {

    componentDidMount() {
        this.props.fetchActivities(this.props.location.state.myItinerary._id)
    
    }
    render() {

        let crItem = this.props.activities.map(activ => {
           return (
            <Carousel.Item>
            <img
            className="d-block w-100"
            src= {activ.img}
            alt= ""
            />
            <Carousel.Caption>
            <h3>{activ.name}</h3>
            </Carousel.Caption>
            </Carousel.Item>
           )

        })

        console.log(this.props)
        const cardStyle = {
            width: 350,
            borderStyle: "solid", 
            alignText: "justify",
            margin: 10,
            height: 550, 

        }

        return (
            <div>
                    <div style= {cardStyle}>
                        <Row style={{heigh:120}}>
                            <Col xs={3} style={{paddingTop: 25}}>
                                <img src= {this.props.location.state.myItinerary.profile_pic} width="45" height="45" ></img>
                                <p>USER</p>
                            </Col>
                            <Col xs={9}>
                                <Row style={{paddingTop: 10}}>
                                <h5>{this.props.location.state.myItinerary.title}</h5>
                                </Row>
                                <Row style={{width:200}}>
                                    <Col style={{padding: 0}} >
                                    <p>{this.props.location.state.myItinerary.rating}</p>
                                    </Col>
                                    <Col style={{padding: 0}}>
                                    <p>{this.props.location.state.myItinerary.duration}</p>
                                    </Col>
                                    <Col style={{padding: 0}}>
                                    <p>{this.props.location.state.myItinerary.price}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <p>{this.props.location.state.myItinerary.hashtags}</p>
                                </Row>
                            </Col>
                        </Row>
                        <h5>Activities</h5>
                        <div>
                        <Carousel>
                            {crItem}
                        </Carousel>
                        </div>
                        <div>
                        <h6 style = {{marginTop: 10, marginBottom: 10}}className= "comments" class="text-left">Comments</h6>
                        </div>
                        <div style= {{display: "flex", marginBottom: "20"}}>
                            <input type="text" class="form-control" name="comment" style= {{height: 25}}/>
                            <img src="./images/right_play_button.png" alt="icon" width="25" height="25" ></img>
                        </div>   
                    </div>

                <div className="Footer" style={{position: "absolute", bottom: 3, paddingLeft: 5 }}>

                <Link to= {{pathname: "/itineraries"}}><img src="./images/left_play_button.png" class= "align-self-sm-start" alt="icon" width="25" height="25" ></img></Link>       
                <Link to= {{pathname: "/"}}><img src="./images/homeIcon.png"  alt="icon" width="40" height="40"></img></Link>
      
                </div>
            </div>
        )
    }
}
const MapStateToProps = state => ({
    activities: state.activities.items
})
export default connect(MapStateToProps, {fetchActivities})(Activities)