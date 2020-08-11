import React, { Component } from 'react';
import {Form, Button, Modal} from "react-bootstrap";
import { BsPencil } from 'react-icons/bs';
import { updateComment } from "../store/actions/commentActions";
import { connect } from "react-redux";

class AddComment extends Component {

    constructor(props){
        super(props)
        this.state = {
            modal: false,
            text:""          
        }
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal,
        });
      }; 

    handleChange = (e) =>{
        this.setState({text: e.target.value})
        console.log(this.state.text)
    };

    updateComments = (id) => {
        console.log(id)
        const text = this.state.text
        const body = JSON.stringify({text})
        this.props.updateComment(id, body)
        
        //window.location.reload(true);
        //this.props.fetchActivities(this.props.location.state.myItinerary._id)
         
        
    }

    render() {
        console.log(this.props.myId)
        return (
            <div>
                <div type="button" variant="primary" onClick={this.toggle} style={{padding:5}}><BsPencil/></div>
                <Modal show={this.state.modal} onHide={this.toggle}>
                        <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form >
                            <Form.Group controlId="exampleForm.ControlTextarea1" style={{lineHeight: 1, marginBottom:2}}>
                                <Form.Label></Form.Label>
                                <Form.Control type="text" as="textarea" placeholder="Write a Comment"  rows="1" onChange={this.handleChange}/>
                            </Form.Group>
                        <Button variant="primary" onClick={() => this.updateComments(this.props.myId)}style={{width: 70, height:25, paddingTop:0, marginBottom:5, alignContent: "center", fontSize:15}} >
                        Submit
                        </Button>     
                        </Form>
                    </Modal.Body>
                    </Modal>
            </div>
        )
    }
}

export default connect(null, {updateComment})(AddComment)
