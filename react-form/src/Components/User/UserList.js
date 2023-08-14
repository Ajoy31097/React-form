import React from "react";
import classes from './UserList.module.css';

const UserList = (props) => {
    return (
        <ul className={classes.users}>
        {props.users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.age} years old): {user.collegeName} College
          </li>
        ))}
      </ul>
    );
}

export default UserList;