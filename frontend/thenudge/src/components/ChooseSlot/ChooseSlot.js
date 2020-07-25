import React, { Component } from 'react';
import { Card, Container, CardDeck } from 'react-bootstrap'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import serverLink from '../../serverlink';

class ChooseSlot extends Component {

  constructor(props) {
    super(props)
    this.state = {
      this.state = {
         startTime: ''
       }
    };

  }

     handleTimePickerChange = (e) => {
        console.log(e.target.value)
        this.setState({time:e.target.value})
        
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const data ={
            time : this.startTime
        }

        axios.post(`${serverLink}/allotSlot` ,data)
                .then(res => console.log(res.data));

        this.setState({
          time : '',
        })
    }


  render() {

    return (

            <Form onSubmit={this.handleSubmit}>

               <Form.Group controlId="formBasicPassword">
                    <Form.Label>Please Select the Time for which you want to schedule a slot</Form.Label>
                    <br />
                    <input type="time" id="appt" name="appt" min="09:00" max="18:00" required onChange={this.handleTimePickerChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
         )   
      }   
  }

  export default ChooseSlot;

