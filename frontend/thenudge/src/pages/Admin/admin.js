import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
// import MakeSlots from '../../pages'

const Admin = () => (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
            {/* <MakeSlots/> */}
        </Tab>
        <Tab eventKey="profile" title="Profile">
            
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
            
        </Tab>
    </Tabs>
)


export default Admin