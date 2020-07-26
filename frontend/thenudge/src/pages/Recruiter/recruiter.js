import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import AddJobs from '../../components/AddJobs/addjobs';
import ViewJobs from '../../components/ViewJobs/ViewJobs';

const Recruiter = () => (
    <div style={{margin:"0 auto", marginBottom:"20px", padding:"100px 200px"}}>
    <Tabs defaultActiveKey="addjobs" id="uncontrolled-tab-example">
        <Tab eventKey="addjobs" title="Add Jobs" style={{padding:"20px"}}>
          <AddJobs/>
        </Tab>
        <Tab eventKey="viewSlots" title="View Jobs">
          <ViewJobs view="Delete"/>
        </Tab>
    </Tabs>
    </div>
)


export default Recruiter
