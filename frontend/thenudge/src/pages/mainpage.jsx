import React from 'react'
import {connect} from 'react-redux';


class Main extends React.Component{

    checkCategoryAndRedirect(currentUser, history){
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
        const history = this.props
        return this.checkCategoryAndRedirect(currentUser,history);
    }

}   

const mapStateToProps = ({user}) => ({
    currentUser : user.currentUser,
  });


export default connect(mapStateToProps)(Main);
