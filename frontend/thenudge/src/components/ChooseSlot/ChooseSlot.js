import React, { Component } from 'react';
import { Card, Container, CardDeck } from 'react-bootstrap'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import bcrypt from 'bcryptjs';
import serverLink from '../../serverlink';
import ViewSlots from '../../components/ViewSlots/ViewSlots'

class ChooseSlot extends Component {

  constructor(props) {
    super(props)
    this.state = {
         startTime: ''
    };

  }

     //function to set time slot choosen
     handleTimePickerChange = (e) => {
        console.log(e.target.value)
        this.setState({time:e.target.value})
        
    }

    //function to handle post route for alloting slots
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
            <ViewSlots action="choose"/>
         )   
      }   
  }


export default ChooseSlot;

