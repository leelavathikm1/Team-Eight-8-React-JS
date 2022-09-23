import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export const Users = () => {
    const [Users, setUsers] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/Users").then((response)=>{
            console.log(response.data)
            setUsers(response.data)
        })
    },[])
  return (
    <div>
        <h1>Users</h1>

        <ul>
            {Users.map((user)=>{
                return <li key={user}>{user}</li>
            })}
        </ul>
    </div>
  )
}
0
