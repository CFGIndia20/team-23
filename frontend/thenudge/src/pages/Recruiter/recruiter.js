import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import AddJobs from '../../components/AddJobs/addjobs';

const Recruiter = () => (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="addjobs" title="Available Jobs">
          <addjobs/>
        </Tab>
    </Tabs>
)


export default Recruiter