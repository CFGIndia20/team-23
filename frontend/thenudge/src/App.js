import React from 'react';
import './App.css';
import { Route, Switch } from "react-router";
import Student from './pages/Student/student';
import Admin from './pages/Admin/admin';
import Teacher from './pages/Teacher/teacher';
import ErrorPage from './pages/ErrorPage/errorpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
            <Route path="/student" component={Student} />
						<Route path="/admin" component={Admin} />
						<Route path="/teacher" component={Teacher} />
            <Route path="/error" component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
