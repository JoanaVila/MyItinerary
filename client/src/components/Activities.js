import React, { Component, useState } from 'react'
import { connect } from "react-redux"
import { fetchActivities } from "../store/actions/activitiesActions"
import { Row, Col, Carousel, Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { fetchComments, addComments, deleteComments, updateComment } from "../store/actions/commentActions";
import { Media, Form, Button, Modal} from "react-bootstrap";
import { BsFillTrashFill,BsPencil } from 'react-icons/bs';
import AddComment from './AddComment';
import moment from "moment";


class Activities extends Component {

    constructor(props){
        super(props)
        this.state = {
            text: "",
            modal: false,
            comments: ""           
        }
    }

    componentDidMount() {
        this.props.fetchActivities(this.props.location.state.myItinerary._id)
        this.props.fetchComments(this.props.location.state.myItinerary._id)
    
    }


    handleChange = (e) =>{
        this.setState({text: e.target.value})
        console.log(this.state.text)
    }

    submitComments = (e) => {
        console.log(this.state.text)
        e.preventDefault()
        const text = this.state.text
        const body = JSON.stringify({text})
        this.props.addComments(this.props.location.state.myItinerary._id, body)
        //window.location.reload(true);
        //this.props.fetchActivities(this.props.location.state.myItinerary._id)
         
        
    } 

    


    /* handleClick = (_id) => {
        console.log(_id)
        this.props.deleteComments(this.props.comments._id)} */

        handleClick = (id) => {
            console.log(id)
            this.props.deleteComments(id)
            window.location.reload(true);
            //this.props.fetchActivities(this.props.location.state.myItinerary._id)
        }


         toggle = () => {
            this.setState({
              modal: !this.state.modal,
            });
          }; 
          
          
        
    
    
    render() {

        const commentStyle = {
            width: 335,
            border: "1px groove grey",
            borderRadius: 5,
            padding : 3,
            marginTop: 5,
            marginLeft: 3,
            height: 95,
            backgroundColor: "#f2f0f0"
        }

        let crItem = this.props.activities.map(activ => {
           return (
            <Carousel.Item>
            <img
            className="d-block w-100"
            src= {activ.img}
            alt= ""
            width={100}
            height={150}
            />
            <Carousel.Caption>
            <h3>{activ.name}</h3>
            </Carousel.Caption>
            </Carousel.Item>
           )

        })
            
         let crComment = this.props.comments.map(comment => {
             console.log(comment._id)
                return(
                
                <Media style= {commentStyle}>
                    <img
                        width={45}
                        height={45}
                        className="mr-3"
                        src={comment.profile_img}
                        alt="Generic placeholder"
                    />
                    <Media.Body style={{textAlign:"left"}}>
                        <h6 style={{marginBottom: 4, lineHeight: 1, fontSize:17}}>@ {comment.userName}</h6>
                        <p style={{marginBottom: 10, lineHeight: 1, fontStyle: "italic"}}>
                        {comment.text}
                        </p>
                        <p style={{marginBottom: 2, lineHeight: 1, fontSize:12, color:"grey"}}>
                        {moment(comment.date).format('DD MMM YYYY, hh:mm')}
                        </p>
                        <div style= {{display: "flex", justifyContent: "space-around", float: "left"}}>
                        <div type="button" onClick={()=>this.handleClick(comment._id)} style={{padding:5}}><BsFillTrashFill color = "black"/></div>
                        <AddComment myId= {comment._id}/>
                        </div>
                                             
                    </Media.Body>
                </Media>
                
                )}) 

        

        console.log(this.props)
        const cardStyle = {
            width: 350,
            borderStyle: "solid", 
            alignText: "justify",
            margin: 10,
            height: 615, 

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
                        <h6 style = {{marginTop: 10, marginBottom: 3}}className= "comments" class="text-left">Comments</h6>
                        </div>
                        <div>
                        <Form onSubmit={this.submitComments} >
                            <Form.Group controlId="exampleForm.ControlTextarea1" style={{lineHeight: 1, marginBottom:2}}>
                            <Form.Label></Form.Label>
                            <Form.Control type="text" as="textarea" placeholder="Write a Comment"  rows="1" onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{width: 70, height:25, paddingTop:0, marginBottom:5, alignContent: "center", fontSize:15}}>
                        Submit
                        </Button>     
                        </Form>
                        </div>
                        <div style={{width: 340, height: 180, overflow: "scroll"}}>
                            {crComment}
                        </div>
                        
                        
                         
                    </div>

                <div className="Footer" style={{width:200, marginLeft: 10}}>
                <Link to= {{pathname: "/itineraries"}}><img src="./images/left_play_button.png" class= "align-self-sm-start" alt="icon" width="25" height="25" style={{float:"left"}} ></img></Link>       
                <Link to= {{pathname: "/"}}><img src="./images/homeIcon.png"  alt="icon" width="30" height="30" style={{float:"right"}}></img></Link>
                </div>
            </div>
        )
    }
}

const MapStateToProps = state => ({
    activities: state.activities.items,
    comments: state.comments.comments
})
export default connect(MapStateToProps, {fetchActivities, fetchComments, addComments, deleteComments, updateComment})(Activities)