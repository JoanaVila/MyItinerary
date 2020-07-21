import React, { Component,useState } from 'react'
import {connect}    from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { addUser } from "../store/actions/userActions";

 class CreateAccount extends Component {
     constructor(props){
       super(props);
       this.state={
       name: "",
       email: "",
       password:"",
       profile_pic: ""
      }
     }
     handleChange =(e)=>{
       this.setState({[e.target.name]:e.target.value})
       
     }

     handleSubmit = (e) => {
         e.preventDefault()
         const name = this.state.name
         const email = this.state.email
         const password = this.state.password
         const profile_pic = this.state.profile_pic
         const body = JSON.stringify({name, email, password, profile_pic})
         
         console.log(body)
         this.props.addUser(body)
         
     }
    
       
     
    render() {    
        return (
            <div>
              <Form onSubmit = {this.handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control name= "name" type="name" placeholder="Enter name" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name= "email" type="email" placeholder="Enter email" onChange={this.handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicText">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control name= "profile_pic" type="text" placeholder="Enter profile_pic" onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name= "password" type="password" placeholder="Password" onChange={this.handleChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
            </div>
        )
    }
}
const mapStateToProps = state=>({
   
})
export default connect(null, {addUser})(CreateAccount);