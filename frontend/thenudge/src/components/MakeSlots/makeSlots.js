import React from 'react'
// import TimePicker from 'react-bootstrap-time-picker';
// import DatePicker from 'react-bootstrap-date-picker';
import axios from 'axios';
import {Form, Button} from 'react-bootstrap';

class MakeSlots extends React.Component {

    constructor(props){
        super(props)
    }


    handleTimePickerChange = (e) => {
        console.log(e)
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Please Select the Time for which you want to schedule a slot</Form.Label>
                    <br/>
                    <input type="time" id="appt" name="appt"min="09:00" max="18:00" required/>
                </Form.Group>
        
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }

}

export default MakeSlots

