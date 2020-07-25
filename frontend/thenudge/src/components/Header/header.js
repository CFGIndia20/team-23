import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../../../src/logo.svg';
import {connect} from 'react-redux'
import { resetCurrentUser } from '../../redux/user/user.actions';
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'


class Header extends React.Component {

    handleSignOut =() =>{
        this.props.resetCurrentUser()
        

    }

    renderSignOut = () => (this.props.currentUser ? <Button style={{ float: "right" }} variant="primary" onClick={()=>resetCurrentUser}>Sign Out</Button>:'')


    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      React Bootstrap
    </Navbar.Brand>
                {this.renderSignOut}
                
            </Navbar>

        )
    }

} 


const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = dispatch => ({
    resetCurrentUser: () => dispatch(resetCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);