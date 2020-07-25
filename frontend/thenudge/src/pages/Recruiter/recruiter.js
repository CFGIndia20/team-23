import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import AddJobs from '../../components/AddJobs/addjobs';
import ViewJobs from '../../components/ViewJobs/ViewJobs';

const Recruiter = () => (
    <Tabs defaultActiveKey="addjobs" id="uncontrolled-tab-example">
        <Tab eventKey="addjobs" title="Available Jobs">
          <AddJobs/>
        </Tab>
        <Tab eventKey="viewSlots" title="View Jobs">
          <ViewJobs/>
          
    </Tabs>
)


export default Recruiter
