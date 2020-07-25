import React from 'react';
import { Button } from 'react-bootstrap';

const Jobs = (props) => (
    <tr>
        <td>{props.job.recruiter}</td>
        <td>{props.job.skillReq}</td>
        <td>{props.job.companyName}</td>
        <td>{props.job.students[0]}</td>
        <td>
            <Button>Delete</Button>
        </td>
        
    </tr>
)

export default Jobs
