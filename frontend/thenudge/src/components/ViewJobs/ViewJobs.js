import React from 'react';
import axios from 'axios';
import Slot from '../Slot/slot';
import {Table} from 'react-bootstrap';
import serverLink from '../../serverlink';
import Jobs from '../../components/Jobs/jobs';


class ViewJobs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            jobs : []
        }
    }

    componentDidMount() {
        axios.get(`${serverLink}/employer/getJobs`).then(
            res => {
                this.setState({ jobs: res.data })
            }
        )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Time SLot</th>
                        <th>No of Students</th>
                        <th>Action Buttons</th>
                        <th>Trial</th>

                    </tr>
                </thead>
                <tbody>{
                    this.state.jobs.map((item,idx) => <Jobs job={item} key={idx}/> )
                    }
                </tbody>
            </Table>
        )
    }
}

export default ViewJobs