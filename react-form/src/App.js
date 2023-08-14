import React, {useState} from 'react';
import './App.css';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';

function App() {

const [usersList, serUsersList] = useState([]);

const addUserHandler = (uName, uAge, ucollegeName) => {
  serUsersList((prevUsersList) => {
    return [...prevUsersList, {name: uName, age: uAge, collegeName: ucollegeName}];
  });
};

  return (<div>
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={usersList}/>
    </div>);
}

export default App;
