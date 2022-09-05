import React, { useState } from 'react'
import UserData from './data.json'
export const UsersTable = () => {
    const [users, setusers] = useState(UserData);
    console.log(UserData)

    const deleteUser=(id)=>{
        let newUsers = users.filter ((user)=>user.id !==id);
        setusers(newUsers)

    }
    return (
        <div className="Conatiner">
                  <table className="table">
                <thead>
                    <tr>
                        <th># id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => {
                        return <tr key={i}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td><button className="btn btn-warning">Edit</button></td>
                            <td><button className="btn btn-danger" onClick={() => { deleteUser(user.id) }}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    );
};
