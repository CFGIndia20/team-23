import React from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import ViewSlots from '../../components/ViewSlots/ViewSlots';
import ChooseSlot from '../../components/ChooseSlot/ChooseSlot';
import { Redirect } from 'react-router-dom';


const Student = (props) => ((props.currentUser.category=='Student' ? (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="viewSlots" title="View Slots">
            <ViewSlots/>
        </Tab>
        <Tab eventKey="chooseSlot" title="Choose Slot">
            <ChooseSlot/>
        </Tab>
    </Tabs>
) : (<Redirect to={`/${props.currentUser.category}`}/>)))


const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

export default Student