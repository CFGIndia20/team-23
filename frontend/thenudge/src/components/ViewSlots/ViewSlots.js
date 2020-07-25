import React from 'react';
import axios from 'axios';
import Slot from '../Slot/slot';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import serverLink from '../../serverlink';


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
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>{
                    this.state.slots.map((item,idx) => <Slot slot={item} key={idx}/> )
                    }
                </tbody>
            </Table>
        )
    }
}

export default ViewSlots