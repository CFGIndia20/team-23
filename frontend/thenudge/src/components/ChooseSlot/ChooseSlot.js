import React, { Component } from 'react';
import { Card, Container, CardDeck } from 'react-bootstrap'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import serverLink from '../serverlink';

class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      
      skills: '',
    };

  }

  handleOnChangeName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handleOnChangeUsername = e => {
    this.setState({
      username: e.target.value,
    });
  };

  handleOnChangePassword = e => {
    this.setState({
      password: e.target.value,
    });
  };

  handleOnChangeCategory = e => {
    console.log(e.target.value)
    if(e.target.value!='Student'){
      this.setState({
        isStudent : false,
        category: e.target.value,
      });
    }
    else{
      this.setState({
        category: e.target.value,
      });
    }
    
  }

  handleOnChangeSkills = e => {
    this.setState({
      skills: e.target.value,
    });
  };

  onSubmit = async e => {
    e.preventDefault();

    const password = this.state.password;
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)


    const data = {
      name: this.state.name,
      email: this.state.username,
      password: hash,
      category: this.state.category,
      skill: this.state.skills
    };

    axios.post(`${serverLink}/register`, data)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      password: '',
      category: 'Student',
      skills: '',
    })
  };


  render() {
    return (

     <Form onSubmit={this.onSubmit}>
  
         <Form.Group controlId="formBasicPassword">
            <Form.Label>Please Select the Time for which you want to schedule a slot</Form.Label>
                <br/>
                  <input type="time" onid="appt" name="appt"min="09:00" max="18:00" required/>
         </Form.Group>
        
          <Button variant="primary" type="submit">
              Submit
          </Button>
     </Form>
    )
  }   
}
export default Register;