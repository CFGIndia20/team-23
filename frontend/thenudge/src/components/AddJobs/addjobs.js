import React from 'react';
import {Form, Button, Tab, Tabs } from 'react-bootstrap';
import axios from 'axios'
import serverLink from '../../serverlink';
import {connect} from 'react-redux'
// import MakeSlots from '../../components/MakeSlots/makeSlots';
// import ViewSlots from '../../components/ViewSlots/ViewSlots';
//import AddTeacherRecruiter from '../../components/AddTeacherRec/addTeacherRecruiter';

class AddJobs extends React.Component{

    constructor(props) {
    super(props)
    this.state = {
      cname: '',
      skill: '',
      seat: 0,
    };

  }

  handleOnChangeName = e => {
    this.setState({
      cname: e.target.value,
    });
  };

  handleOnChangeSkill = e => {
    this.setState({
      skill: e.target.value,
    });
  };

  handleOnChangeSeat = e => {
    this.setState({
      seat: e.target.value,
    });
  };

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
        <h1> Register </h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.cname}
              name="Name"
              onChange={this.handleOnChangeName} />
          </Form.Group>

          <Form.Group controlId="formBasicSkill" >
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              value={this.state.skills}
              name="Skills"
              onChange={this.handleOnChangeSkill} />
          </Form.Group>

            <Form.Group controlId="formBasicSkill" >
            <Form.Label>Seats Available</Form.Label>
            <Form.Control
              type="number"
              value={this.state.seat}
              name="Seat"
              onChange={this.handleOnChangeSeat} />
          </Form.Group>

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