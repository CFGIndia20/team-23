import React from 'react'
import {connect} from 'react-redux';
import TestBlock from './TestBlock/testblock.component';


class Main extends React.Component{

    checkCategoryAndRedirect(currentUser){
        switch(currentUser.category){
            case 'student':
                history.push('/student')
            case 'admin':
                history.push('/admin')
            case 'teacher':
                history.push('/teacher')
            default :
                history.push('/error')
        }
    }
    
    render(){
        const currentUser = this.props.currentUser;
        return this.checkCategoryAndRedirect(currentUser);
    }

}   

const mapStateToProps = ({user}) => ({
    currentUser : user.currentUser,
  });


export default connect(mapStateToProps)(Main);
