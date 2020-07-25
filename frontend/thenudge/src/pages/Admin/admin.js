import React from 'react';
import {Tab, Tabs, Container} from 'react-bootstrap';
import MakeSlots from '../../components/MakeSlots/makeSlots';
import ViewSlots from '../../components/ViewSlots/ViewSlots';
import AddTeacherRecruiter from '../../components/AddTeacherRec/addTeacherRecruiter';

const Admin = () => (
    <Container>
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="makeSlots" title="Make Slots">
            <MakeSlots/>
        </Tab>
        <Tab eventKey="viewSlots" title="View Slots">
            <ViewSlots/>
        </Tab>
        <Tab eventKey="addTeacher" title="Add Teacher/Recruiter">
            <AddTeacherRecruiter/>
        </Tab>
    </Tabs>
   </Container>
)


export default Admin