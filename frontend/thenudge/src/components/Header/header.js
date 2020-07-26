import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import logo from '../../../src/logo.svg';
import {connect} from 'react-redux'
import { resetCurrentUser } from '../../redux/user/user.actions';
import compose from 'recompose/compose';
import {withRouter} from 'react-router-dom';


class Header extends React.Component {

    handleSignOut =(reset) =>{
        reset()
        this.props.history.push('/')
        

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
            <Button style={{ float: "left" }} 
            variant="primary" 
            onClick={()=>this.props.resetCurrentUser()}>
            Sign Out
            </Button>
                
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


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
  )(Header);
  