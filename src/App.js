import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';
import UpdateUserComponent from './components/UpdateUserComponent';
import ViewTaskComponent from './components/ViewTaskComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
              <div style={{ backgroundColor:'#9b59b6'}}>
                <div className="container">
                    <Routes> 
                          <Route path = "/" element= {<ViewUserComponent />}></Route>
                          <Route path = "/add-list" element= {<CreateUserComponent/>}></Route>
                          <Route path = "/list/all" element = {<ListUserComponent/>}></Route>
                          <Route path = "/update/:id" element = {<UpdateUserComponent/>}></Route>
                          <Route path = "/viewTask" element = {<ViewTaskComponent/>}></Route>
                    </Routes> 
                </div>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
