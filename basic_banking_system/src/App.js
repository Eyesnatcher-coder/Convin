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
          <Route exact path='/transaction_history' element={<><Home/><History/></>}></Route>
          {
            (users.length !== 0) ?
          <>
          <Route exact path={`/customerlist/${users[0].account}`} element={<><Home/><Paruser name={users[0].name} account={users[0].account} email={users[0].email} savings={users[0].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[1].account}`} element={<><Home/><Paruser name={users[1].name} account={users[1].account} email={users[1].email} savings={users[1].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[2].account}`} element={<><Home/><Paruser name={users[2].name} account={users[2].account} email={users[2].email} savings={users[2].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[3].account}`} element={<><Home/><Paruser name={users[3].name} account={users[3].account} email={users[3].email} savings={users[3].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[4].account}`} element={<><Home/><Paruser name={users[4].name} account={users[4].account} email={users[4].email} savings={users[4].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[5].account}`} element={<><Home/><Paruser name={users[5].name} account={users[5].account} email={users[5].email} savings={users[5].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[6].account}`} element={<><Home/><Paruser name={users[6].name} account={users[6].account} email={users[6].email} savings={users[6].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[7].account}`} element={<><Home/><Paruser name={users[7].name} account={users[7].account} email={users[7].email} savings={users[7].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[8].account}`} element={<><Home/><Paruser name={users[8].name} account={users[8].account} email={users[8].email} savings={users[8].savings}/></>}></Route>
          <Route exact path={`/customerlist/${users[9].account}`} element={<><Home/><Paruser name={users[9].name} account={users[9].account} email={users[9].email} savings={users[9].savings}/></>}></Route>
          </> : <></>
          }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
