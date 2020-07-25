import React from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import MakeSlots from '../../components/MakeSlots/makeSlots';
import ViewSlots from '../../components/ViewSlots/ViewSlots';
import AddTeacherRecruiter from '../../components/AddTeacherRec/addTeacherRecruiter';
import { Redirect } from 'react-router-dom';


const Student = (props) => ((props.currentUser.category=='Student' ? (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="makeSlots" title="Make Slots">
            <MakeSlots />
        </Tab>
        <Tab eventKey="viewSlots" title="View Slots">
            <ViewSlots />
        </Tab>
        <Tab eventKey="addTeacher" title="Add Teacher/Recruiter">
            <AddTeacherRecruiter />
        </Tab>
    </Tabs>
) : (<Redirect to={`/${props.currentUser.category}`}/>)))


const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

export default Student