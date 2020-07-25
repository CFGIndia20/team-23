import React, { Component } from 'react';
import { Card, Container, CardDeck } from 'react-bootstrap'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import serverLink from '../serverlink';
import {withRouter} from 'react-router-dom';




class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      password: '',
      category: 'Student',
      isStudent : true,
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
      .then(res => {
        console.log(res.data)
        if(this.state.category === 'Student'){
          this.props.history.push('/chooseSlot')
        }
      });

    
  };


  render() {
    return (
      <div className="Registration container" style={{ textAlign: "left", width:"50%" }}>
        <h1> Register </h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              name="Name"
              onChange={this.handleOnChangeName} />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              value={this.state.username}
              name="Username"
              onChange={this.handleOnChangeUsername} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            {' '}
            <Form.Control
              type="password"
              value={this.state.password}
              name="Password"
              onChange={this.handleOnChangePassword}
              autoComplete="password"
              required />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Select Category</Form.Label>
            <Form.Control as="select" onChange={this.handleOnChangeCategory}>
              <option>Student</option>
              <option>Teacher</option>
              <option>Recriuter</option>
              <option>Admin</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicSkill" hidden={!this.state.isStudent}>
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              value={this.state.skills}
              name="Skills"
              onChange={this.handleOnChangeSkills} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>

        </Form>
      </div>

    )
  }

}


export default withRouter(Register);