import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import AddJobs from '../../components/AddJobs/addjobs';
import ViewJobs from '../../components/ViewJobs/ViewJobs';

const Recruiter = () => (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="addjobs" title="Available Jobs">
          <AddJobs/>
        </Tab>
        <Tab eventKey="viewSlots" title="View Slots">
            <ViewJobs/>
        </Tab>
    </Tabs>
)


export default Recruiter