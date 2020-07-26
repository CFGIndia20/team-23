import React from 'react' ;
import { Form, Button ,Card, Container, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import ViewSlots from '../../components/ViewSlots/ViewSlots';
import {Table} from 'react-bootstrap';
import serverLink from '../../serverlink';
import Slot from '../../components/Slot/slot';
import {connect} from 'react-redux';

class Teacher extends React.Component {

    constructor(props) {
    super(props)
    this.state = {
        slots : []
    }
   
  }
    

    onSubmit = (e) => {
        axios.get(`${serverLink}/teacher/request`)
        .then(res => {
            if(res.status === 200){
                alert('A mail has been sent to the Admin');
            }
        })

    }


     componentDidMount() {
        const data = {
            teacherId : this.props.currentUser._id
        }
        axios.post(`${serverLink}/teacher/viewslots`).then(
            res => {
                console.log(res.data)
                this.setState({ slots: res.data })
            }
        )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container style={{margin:"0 auto", paddingTop:"200px"}}>
            
              <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Time SLot</th>
                        <th>No of Students</th>
                    </tr>
                </thead>
                <tbody>{
                    this.state.slots.map((item,idx) => <Slot isallocateTeacher={false} slot={item} key={idx}/> )
                    }
                </tbody>
              </Table>

                <Button onSubmit={this.onSubmit}  variant="primary" type="submit">
                    Notify Admin
                </Button>  
 
            </Container>
        )
    }
} 


const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Teacher)