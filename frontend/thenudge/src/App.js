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

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/student" component={Student} />
						<Route exact path="/admin" component={Admin} />
						<Route exact path="/teacher" component={Teacher} />
            <Route exact path="/error" component={ErrorPage}/>
            <Route exact path="/MakeSlots" component={MakeSlots}/>
            
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
