import React from 'react';
import {Form, Button, Tab, Tabs } from 'react-bootstrap';
import axios from 'axios'
import serverLink from '../../serverlink';
import {connect} from 'react-redux'


class AddJobs extends React.Component{

        constructor(props) {
        super(props)
        this.state = {
          cname: '',         //Company name
          skill: '',         //Skills Required
          seat: 0,           //Seats Available
        };
      }

   //Function to handle Company Name input
      handleOnChangeName = e => {
        this.setState({
          cname: e.target.value,
        });
      };

   //Function to handle Company Name input
      handleOnChangeSkill = e => {
        this.setState({
          skill: e.target.value,
        });
      };

   //Function to handle Company Name input
      handleOnChangeSeat = e => {
        this.setState({
          seat: e.target.value,
        });
      };

    //Function to handle post route for add jobs
      onSubmit = async e => {
        e.preventDefault();

        const data = {
          _id : this.props.currentUser._id,
          companyName: this.state.cname,
          skillReq: this.state.skill,
          seatAvailable: this.state.seat,
        };

        axios.post(`${serverLink}/employer/addjob`, data)
          .then(res => console.log(res.data));

        this.setState({
          cname: '',
          skill: '',
          seat: 0,
        })
      };


  render() {
    return (

      <div className="Registration container" style={{ textAlign: "left", width:"50%" }}>
        <h1> Add Job </h1>
        
      {/*Form for Company Name*/}
         <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.cname}
              name="Name"
              onChange={this.handleOnChangeName} />
          </Form.Group>

       {/*Form for Skills*/} 
          <Form.Group controlId="formBasicSkill" >
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              value={this.state.skills}
              name="Skills"
              onChange={this.handleOnChangeSkill} />
          </Form.Group>

        {/*Form for Seat Available*/}
            <Form.Group controlId="formBasicSkill" >
            <Form.Label>Seats Available</Form.Label>
            <Form.Control
              type="number"
              value={this.state.seat}
              name="Seat"
              onChange={this.handleOnChangeSeat} />
          </Form.Group>

         {/*Submit Button*/}
          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </div>

    )
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});



export default connect(mapStateToProps)(AddJobs)