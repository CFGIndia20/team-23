import React from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import serverLink from '../../serverlink';


class MakeSlots extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            time: '',
            onSuccess: false,
            link: "www.trial.com"   //dummy link
        }
    }

    handleTimePickerChange = (e) => {
        console.log(e.target.value)
        this.setState({ time: e.target.value })
    }

    handleUrlChange = (e) => {
        console.log(e.target.value)
        this.setState({ link: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            time: this.state.time,
            // time : "11:00AM - 12:00PM",
            link: this.state.link,
            startDate : Date.now()
        }

        console.log(data)
        axios.post(`${serverLink}/admin/addSlot`, data)
            .then(res => {
                if (res.status === 200) {
                    console.log(res)
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

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter the url for the slot</Form.Label>
                    <Form.Control type="url" onChange={this.handleUrlChange} required placeholder="name@example.com" />
                </Form.Group>
                {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label>Please enter a url for the slot slot</Form.Label>
                    <br />
                    <input type="time" id="appt" name="appt" min="09:00" max="18:00" required onChange={this.handleTimePickerChange} />
                </Form.Group> */}

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

