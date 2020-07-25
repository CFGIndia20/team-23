import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
// import MakeSlots from '../../components/MakeSlots/makeSlots';
// import ViewSlots from '../../components/ViewSlots/ViewSlots';
//import AddTeacherRecruiter from '../../components/AddTeacherRec/addTeacherRecruiter';

class Recruiter extends Component{

    constructor(props) {
    super(props)
    this.state = {
      cname: '',
      skill: '',
      seat: 0,
    };

  }

  handleOnChangeCompanyName = e => {
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
      companyName: this.state.cname,
      skillReq: this.state.skill,
      seatAsvailable: this.state.seat,
    };

    axios.post(`${serverLink}/recruiter`, data)
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
              onChange={this.handleOnChangeSkills} />
          </Form.Group>

            <Form.Group controlId="formBasicSkill" >
            <Form.Label>Seats Available</Form.Label>
            <Form.Control
              type="number"
              value={this.state.seat}
              name="Seat"
              onChange={this.handleOnChangeSkills} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

        </Form>
      </div>

    )
  }
}



export default Recruiter