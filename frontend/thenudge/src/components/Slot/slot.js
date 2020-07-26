import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import serverLink from '../../serverlink';


const onChoose = (id) => {
    const data = {
        _id : id  
    }
    axios.post(`${serverLink}`,data)
    .then(res => console.log(res.data))
}

const onDelete = (id) => {
    const data = {
        _id : id
    }
    axios.post(`${serverLink}`,data)
    .then(res => console.log(res.data))
}

const sendButton = (action, id) => {
    switch(action){
        case 'choose':
            return <Button onClick={() => onChoose(id)}>Choose</Button>
        case 'delete':
            return <Button onClick={() => onDelete(id)}>Delete</Button>
    }
}

const allocateTeachers = () => {
    console.log('In allocate Tezchers')
    axios.post(`${serverLink}/admin/allotTeachers`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const Slot = (props) => (
    <tr>
        <td>{props.slot.time}</td>
        <td>{props.slot.noOfStudent}</td>
        <td>
            <span style={{display:"inline"}}><Button onClick={allocateTeachers}>Allocate Teacher</Button></span>
            {sendButton(props.action, props.slot._id)}
        </td>
    </tr>
)

export default Slot
