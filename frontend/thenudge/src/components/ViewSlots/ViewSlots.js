import React from 'react';
import Slot from '../Slot/slot';
import {Table} from 'react-bootstrap';
import serverLink from '../../serverlink';
import axios from 'axios';

class ViewSlots extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            slots : []
        }
    }

    componentDidMount() {
        axios.get(`${serverLink}/admin/viewslots`)
        .then(
            res => {
                console.log(res.data)
                this.setState({ slots: res.data })
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
                    </tr>
                </thead>
                <tbody>{
                    this.state.slots.map((item,idx) => <Slot action={this.props.action} slot={item} key={idx}/> )
                    }
                </tbody>
            </Table>
        )
    }
}

export default ViewSlots