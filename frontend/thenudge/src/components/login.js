import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import { setCurrentUser } from '../redux/user/user.actions';
import serverLink from '../serverlink';
import {Link} from 'react-router-dom';
import './login.css'
import {Form, Button} from 'react-bootstrap'

class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
            name : '',
        }
    }

    handleOnChangeUserName = (e) => {
        this.setState({
          username: e.target.value,
        });
      };
    
      handleOnChangePassword = (e) => {
        this.setState({
          password: e.target.value,
        });
      };
    
      onSubmit = (e) => {

        const {setCurrentUser, history} = this.props;

        e.preventDefault();
        const data = {
          username: this.state.username,
          password: this.state.password,
        };

        axios.post(`${serverLink}/login`,data)
        .then(res => {
          if(res.status === 200){
            console.log(res.data)
            setCurrentUser(res.data)
            if(res.data.category === 'Student'){
              history.push('/chooseSlot')
            }
            else{
              history.push('/')
            }
            
          }
        })
        .catch( e => console.log(e));


        this.setState({
          name : '',
          username: '',
          password: '',
          category: '',
        });


      }

    render(){
        return (
          <div style={{width:"70%",margin:"0 auto", textAlign:"left", paddingTop:"100px"}}>
            <h3>Login</h3>
          <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.handleOnChangeUserName} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleOnChangePassword} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <br/>
        <Link to="/register">Click Here to Register</Link>
        </div>

  
        )
    }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default withRouter(connect(null,mapDispatchToProps)(Login));