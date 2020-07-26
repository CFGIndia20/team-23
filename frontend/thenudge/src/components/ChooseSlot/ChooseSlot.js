import React, { Component } from 'react';
import { Card, Container, CardDeck, Spinner, Table } from 'react-bootstrap'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import serverLink from '../../serverlink';
import ViewSlots from '../../components/ViewSlots/ViewSlots'
import {connect} from 'react-redux';
import compose from 'recompose/compose';

class ChooseSlot extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startTime: '',
      slots: []

    };

  }


  componentDidMount() {
    axios.get(`${serverLink}/student/displayAvailBatch`)
      .then(res =>
        this.setState({ slots: res.data })
      )
      .catch(err => console.log(err))
  }

  handleChoose = (_id) => {
    const data = {
      email : this.props.currentUser.email
    }
    axios.post(`${serverLink}/student/allotSlot/${_id}`).
    then(res => console.log(res.data))
    .catch(err => console.log(err))
  }


  handleTimePickerChange = (e) => {
    console.log(e.target.value)
    this.setState({ time: e.target.value })

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      time: this.startTime
    }

    axios.post(`${serverLink}/allotSlot`, data)
      .then(res => {
        if(res.data === 200){
          alert('added successfully')
      }});

    this.setState({
      time: '',
    })
  }


  render() {

    return this.state.slots ? (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Timings</th>
            <th>No of Students</th>
            <th>Link</th>
            <th>Start Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.slots.map(item => (
            <tr>
              <td>{item.time}</td>
              <td>{item.noOfStudent}</td>
              <td>{item.link}</td>
              <td>{Date.parse(item.startDate).toString}</td>
              <td><Button onClick={() => this.handleChoose(item._id)}>Choose</Button></td>
            </tr>
          ))}

        </tbody>
      </Table>


    ) : (<Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>)
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});


export default connect(mapStateToProps)(ChooseSlot);

