import React from 'react'
// import TimePicker from 'react-bootstrap-time-picker';
// import DatePicker from 'react-bootstrap-date-picker';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import serverLink from '../../serverlink';

class MakeSlots extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startTime: '',
            onSuccess: false,
            link : "www.trial.com"
        }
    }

    componentDidMount() {
        
    }

    handleTimePickerChange = (e) => {
        console.log(e.target.value)
        this.setState({time:e.target.value})
        
    }

    handleSubmit = (e) => {
        const data ={
            time : this.startTime,
            link : this.state.link
        }

        axios.post(`${serverLink}/admin/addslot`)
            .then(res => {
                if (res.status == 200) {
                    this.setState({ onSuccess: true });
                }
            })
            .catch(err => console.log(err))
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
                <Alert variant="success" hidden={!this.state.onSuccess}>
                    Slot Added Succesfully
                </Alert>
            </Form>
        )
    }

}

export default MakeSlots

