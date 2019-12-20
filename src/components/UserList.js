import React from 'react';
import useResource from './useResource';
const UserList = () => {

    const users = useResource('users');
    return (
    <div>{users.map(user=>(<li key={user.id}>{user.name}</li>))}</div>
    )
}

export default UserList;