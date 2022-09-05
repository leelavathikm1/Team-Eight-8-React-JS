import React, { useState } from 'react'

export const Form1 = () => {
  const [User, setUser] = useState({
    FirstName: "",
    LastName: "",
    Dob: "",
    Email: "",
    MobileNo: ""
  });

  const [Users, setUsers] = useState([]);
  const [index, setindex] = useState(0);

  const handlechange = (e) => {
    let newUser = { ...User };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  }

  const handlesubmit = () => {
    console.log(User);
    let newUsers = [...Users];
    newUsers.push(User);
    setUsers(newUsers);
    clearform();
  };

  const clearform = () => {
    setUser({
        FirstName: "",
        LastName: "",
        Dob: "",
        Email: "",
        MobileNo: ""
    })
  };

  const deleteUser = (id) => {
    let newUsers = Users.filter((myUser) => myUser.id !== id);
    setUsers(newUsers);
  };

  const handleEdit = (myUser, i) => {
    setUser(myUser);
    setindex(i);

  };

  const updateUser = () => {
    let newUsers = [...Users];
    newUsers[index] = User;
    setUsers(newUsers);
    clearform();
  }

  const { FirstName, LastName, Dob, Email, MobileNo } = User;
  return (
    <div>
      <form>
        <label htmlFor="">First Name : </label>
        <input type="text" name="firstName" value={FirstName} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <label htmlFor="">Last Name : </label>
        <input type="text" name="lastName" value={LastName} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <label htmlFor="">Dob: </label>
        <input type="text" name="Dob" value={Dob} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <label htmlFor="">Email : </label>
        <input type="text" name="email" value={Email} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <label htmlFor="">Mobile Number : </label>
        <input type="text" name="MobileNo" value={MobileNo} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <button type="button" onClick={() => handlesubmit()}>Add User</button>
        <button type="button" onClick={updateUser}>Update User</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th >First Nmae </th>
            <th >Last Name</th>
            <th >Dob</th>
            <th >Email</th>
            <th >Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((User, i) => {
            return <tr key={i}>
              <td>{User.FirstName}</td>
              <td>{User.LastName}</td>
              <td>{User.Dob}</td>
              <td>{User.Email}</td>
              <td>{User.MobileNo}</td>
              <td><button className="btn btn-warning" onClick={() => { handleEdit(User, i) }}>Edit</button></td>
              <td><button className="btn btn-danger" onClick={() => { deleteUser(User.id) }}>Delete</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}