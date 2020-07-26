import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux'
import { setCurrentUser } from '../redux/user/user.actions';
import serverLink from '../serverlink';
import {Link} from 'react-router-dom';

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
            <div className="Login" style={{textAlign:"left", width:"80%", margin:"0 auto"}}>
            <h1> Login </h1> 
            <form onSubmit={this.onSubmit}>
              <div>
                <div className="fields">
                  <p> Username </p>    
                  <input
                    type="text"
                    name="Username"
                    onChange={this.handleOnChangeUserName}
                    autoComplete="Username"
                    required
                  />
                </div>
                
                <div className="fields">
                  
                  <p> Password </p>    
                  <input
                    type="password"
                    name="Password"
                    onChange={this.handleOnChangePassword}
                    autoComplete="Password"
                    required
                  />
                      
                </div>
                
                <div className="buttons">
                  
                  <button
                    type="button"
                    onClick={this.onSubmit}
                    className="btn btn-primary"
                  >
                    
                      Login    
                  </button>
                </div>
              </div>
               
            </form>
            <Link to="/register">Register Here</Link>
          </div>
  
        )
    }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default withRouter(connect(null,mapDispatchToProps)(Login));