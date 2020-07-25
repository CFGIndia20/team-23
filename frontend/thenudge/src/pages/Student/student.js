import React from 'react'
import { Tab, Tabs, Table, Button, } from 'react-bootstrap';
import ViewSlots from '../../components/ViewSlots/ViewSlots';
import ChooseSlot from '../../components/ChooseSlot/ChooseSlot';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios';
import serverLink from '../../serverlink';


class Student extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            jobs: []
        }
    }

    handleApply = (_id) => {
        axios.post(`${serverLink}/applyJob/${this.props.currentUser.username}/${_id}`).
        then(res => console.log(res))
        .catch(err => console.log(err))
    }

    componentDidMount() {
        axios.post(`${serverLink}/student/displayAvailJob/${this.props.currentUser.email}`)
            .then(res => this.setState({ jobs: res.data }))
    }



    render() {
        return (
            ((this.props.currentUser.category == 'Student' ? (
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="viewJobs" title="View Jobs">
                        {
                            this.state.jobs.map(item => <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Company Name</th>
                                        <th>Skill Required</th>
                                        <th>Students</th>
                                        <th>Seat Available</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.slots.map(item => (
                                        <tr>
                                            <td>{item.companyName}</td>
                                            <td>{item.skillReq}</td>
                                            <td>{item.students[0]}</td>
                                            <td>{item.seatAvailable}</td>
                                            <td><Button onClick={() => this.handleApply(item._id)}>Choose</Button></td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>)
                        }
                    </Tab>
                    <Tab eventKey="chooseSlot" title="Choose Slot">
                        <ChooseSlot />
                    </Tab>
                </Tabs>
            ) : (<Redirect to={`/${this.props.currentUser.category}`} />)))

        )
    }
}


const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});


export default connect(mapStateToProps)(Student)