import React, {Component} from 'react';
import { Card, Container, CardDeck } from 'react-bootstrap'
import axios from 'axios';
import bcrypt from 'bcryptjs';



class Register extends Component{

    constructor(props){
        super(props)
        this.state = {
            name : '',
            username: '',
            password: '',
            category : '',
            skills : '',
          };

    }

    handleOnChangeName = e => {
        this.setState ({
          name: e.target.value,
        });
      };
    
      handleOnChangeUsername = e => {
        this.setState ({
          username: e.target.value,
        });
      };
    
      handleOnChangePassword = e => {
        this.setState ({
          password: e.target.value,
        });
      };
      
       handleOnChangeCategory = e => {
        this.setState ({
          category: e.target.value,
        });
      };

        handleOnChangeSkills = e => {
        this.setState ({
          skills: e.target.value,
        });
      };
    
      onSubmit = async e => {
        e.preventDefault ();

        const password = this.state.password;
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password,salt)

        const data = {
          name: this.state.name,
          username: this.state.username,
          password: hash,
          category : this.state.category,
          skills : this.state.skills
        };

        axios.post('http://localhost:3000/register', data)
            .then(res => console.log(res.data));

            this.setState({
              name : '',
              username: '',
              password: '',
              category: '',
              skills: '',
            })
      };


    render(){
        return(
          <div className="Registration">
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
                    required/>
                </Form.Group>

                <Form.Group controlId="formBasicCategory">
                  <Form.Label>Category</Form.Label>
                  <Form.Control 
                     type="text"
                    value={this.state.category}
                    name="Category"
                    onChange={this.handleOnChangeCategory} />
                </Form.Group>

                <Form.Group controlId="formBasicSkill">
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


export default Register;