import React from 'react';
import UserNames from './components/UserNames';
import UserInfo from './components/UsersInfo';
import SearchBar from './components/SearchBar';
import AddUser from './components/AddUser';
import './App.css';



function App() {


  return (
    <div className="App mt-5 bg-light p-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="float-left">Clever Test</h3>
          </div>
        </div>
      <div className="row">
        <div className="col-lg-6">
          <SearchBar />
        </div>  
        <div className="col-lg-6">
        <AddUser />
        </div>
      </div>
        <div className="row mt-5">
          <div className="col">
          <UserNames />
          </div>
          <div className="col">
          <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
