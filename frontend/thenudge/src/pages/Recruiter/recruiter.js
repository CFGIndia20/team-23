import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import AddJobs from '../../components/AddJobs/addjobs';

const Recruiter = () => (
    <Tabs defaultActiveKey="addjobs" id="uncontrolled-tab-example">
        <Tab eventKey="addjobs" title="Available Jobs">
          <AddJobs/>
        </Tab>
    </Tabs>
)


export default Recruiter