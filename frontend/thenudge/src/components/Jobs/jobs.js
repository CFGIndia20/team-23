import React from 'react';
import { Button } from 'react-bootstrap';




const Jobs = (props) => (
    <tr>
        <td>{props.job.seatAvailable}</td>
        <td>{props.job.skillReq}</td>
        <td>{props.job.companyName}</td>
        <td>
        <Button>{props.view}</Button>
        </td>
        
    </tr>
)

export default Jobs
