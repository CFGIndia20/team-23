import React from 'react' ;
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import ViewSlots from '../../components/ViewSlots/ViewSlots';

class Teacher extends React.Component {

    constructor(props) {
    super(props)
   
  }
    

    onSubmit = async e => {
    e.preventDefault();   

    }

    render() {
        return (
            <Container>
                <Button onSubmit={this.onSubmit}  variant="primary" type="submit">
                    Notify Admin
                </Button>  
                
               
            </Container>
        )
    }
} 

export default Teacher