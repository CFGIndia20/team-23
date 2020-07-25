import React from 'react';
import './App.css';
import { Route, Switch } from "react-router";
import Student from './pages/Student/student';
import Admin from './pages/Admin/admin';
import Teacher from './pages/Teacher/teacher';
import ErrorPage from './pages/ErrorPage/errorpage';
import Register from './components/register';
import Header from './components/Header/header';
import Main from './pages/mainpage'
import Footer from './components/Footer/footer'
import MakeSlots from './components/MakeSlots/makeSlots'
import Login from './components/login'

import 'bootstrap/dist/css/bootstrap.min.css';
import Recruiter from './pages/Recruiter/recruiter';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/Student" component={Student} />
						<Route exact path="/Admin" component={Admin} />
						<Route exact path="/Teacher" component={Teacher} />
            <Route exact path="/error" component={ErrorPage}/>
            <Route exact path="/MakeSlots" component={MakeSlots}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/Recruiter" component={Recruiter}/>        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
