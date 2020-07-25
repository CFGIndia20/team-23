import React from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import ViewJobs from '../../components/ViewJobs/ViewJobs';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux'


const Student = (props) => ((props.currentUser.category=='Student' ? (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="viewJobs" title="View Jobs">
            <ViewJobs/>
        </Tab>
    </Tabs>
) : (<Redirect to={`/${props.currentUser.category}`}/>)))


const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});


export default connect(mapStateToProps)(Student)