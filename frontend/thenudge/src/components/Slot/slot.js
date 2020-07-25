import React from 'react';
import { Button } from 'react-bootstrap';





const Slot = (props) => (
    <tr>
        <td>{props.slot.time}</td>
        <td>{props.slot.noOfStudent}</td>
        <td>
            <span style={{display:"inline"}}><Button hidden={!props.slot.isFull}>Allocate Teacher</Button>
            <Button>Delete</Button></span>
        
        </td>
        
    </tr>
)

export default Slot
