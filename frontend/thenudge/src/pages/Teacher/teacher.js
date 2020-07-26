import React from 'react' ;
import { Form, Button ,Card, Container, CardDeck } from 'react-bootstrap';
import axios from 'axios';
import ViewSlots from '../../components/ViewSlots/ViewSlots';
import {Table} from 'react-bootstrap';

class Teacher extends React.Component {

    constructor(props) {
    super(props)
   
    }
    

    onSubmit = async e => {
    e.preventDefault();   

    }


    componentDidMount() {
        axios.get(`${serverLink}/viewslots`).then(
            res => {
                this.setState({ slots: res.data })
            }
        )
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

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
                    this.state.slots.map((item,idx) => <slots job={item} key={idx}/> )
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

export default Teacher