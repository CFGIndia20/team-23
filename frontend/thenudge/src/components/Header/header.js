import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../../../src/logo.svg';
import {connect} from 'react-redux'
import { resetCurrentUser } from '../../redux/user/user.actions';



class Header extends React.Component {

    handleSignOut =() =>{
        this.props.resetCurrentUser()
    }

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
      The Nudge
    </Navbar.Brand>
    <Button style={{ float: "right" }} variant="primary" onClick={()=>this.props.resetCurrentUser()}>Sign Out</Button>
                
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