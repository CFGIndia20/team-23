import React, {Component} from 'react';
import axios from 'axios';



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


        const data = {
          name: this.state.name,
          username: this.state.username,
          password: this.state.password,
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
                <form onSubmit={this.onSubmit}>
              <div>
                <div className="fields">
                  <p>Name </p>
                  <input
                    type="text"
                    value={this.state.name}
                    name="Name"
                    onChange={this.handleOnChangeName}
                  />
                  
                </div> <div className="fields">
                  <p>Username</p>
                  <input
                    type="email"
                    value={this.state.username}
                    name="Username"
                    onChange={this.handleOnChangeUsername}
                  />
                </div>
                <div className="fields">
                  <p> Password </p>
                  {' '}
                  <input
                    type="password"
                    value={this.state.password}
                    name="Password"
                    onChange={this.handleOnChangePassword}
                    autoComplete="password"
                    required
                  />
                </div>
                <div className="fields">
                  <p> Category </p>
                  <input
                    type="text"
                    value={this.state.category}
                    name="Category"
                    onChange={this.handleOnChangeCategory}
                  />
                </div>
                <div className="fields">
                  <p> Skills </p>
                  <input
                    type="text"
                    value={this.state.skills}
                    name="Skills"
                    onChange={this.handleOnChangeSkills}
                  />
                </div>
                <div className="buttons">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                   REGISTER
                  </button>
                </div>
              </div>
            </form>
          </div>

        )
    }

}


export default Register;