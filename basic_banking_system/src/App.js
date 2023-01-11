import './App.css';
import Home from './Home';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from './components/content/content';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerList from './components/customerList/customerList';
import GridcustomerList from './components/customerList/gridcustomerslist';
import {logins} from './components/customerList/customerdata';
import Paruser from './components/User/user';
import { useState, useEffect } from 'react';
import History from './components/history/history';


function App() {
  // window.users = users;
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getUsers() {
            setUsers(await logins);
        }
        getUsers();
    }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<><Home/><Content /></>}></Route>
          <Route exact path='/customer' element={<><Home/><CustomerList/></>}></Route>
          <Route exact path='/customerlist' element={<><Home/><GridcustomerList/></>}></Route>
          <Route exact path='/history' element={<><Home/><History/></>}></Route>
          {
            (users.length !== 0) ?
          <>
          {users.map((user) => {
                        return <Route exact path={`/customerlist/${user._id}`} element={<><Home/><Paruser id={user._id} bucketname={user.bucketname} no_of_videos={user.no_of_videos} videos={user.videos}/></>}></Route> 
                    })}
          </> : <></>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
