import React from 'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


class Main extends React.Component{

    checkCategoryAndRedirect(currentUser, history){
        switch(currentUser.category){
            case 'Student':
                return <Redirect to="/student"/>
            case 'Admin':
                return <Redirect to="/admin"/>
            case 'Teacher':
                return <Redirect to="/teacher"/>
            default :
                return  <Redirect to="/error"/>
        }
    }
    
    render(){
        const currentUser = this.props.currentUser;
        return currentUser ? this.checkCategoryAndRedirect(currentUser) : <Redirect to="/login"/>
    }

}   

const mapStateToProps = ({user}) => ({
    currentUser : user.currentUser,
  });


export default connect(mapStateToProps)(Main);
