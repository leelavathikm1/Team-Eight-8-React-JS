import React, { useState } from 'react'

export const Form1 = () => {
  const [User, setUser] = useState({
    id: "",
    FirstName: "",
    DateofBirth: "",
    EmailId: "",
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
      id: "",
      FirstName: "",
      DateofBirth: "",
      EmailId: "",
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

  const { id, FirstName, DateofBirth, EmailId, MobileNo } = User;
  return (
    <div>
      <form>
        <label htmlFor="">Id : </label>
        <input type="text" name="id" value={id} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <label htmlFor="">First Name : </label>
        <input type="text" name="FirstName" value={FirstName} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <label htmlFor="">Date of Birth : </label>
        <input type="text" name="DateofBirth" value={DateofBirth} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <label htmlFor="">Email Id : </label>
        <input type="text" name="EmailId" value={EmailId} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <label htmlFor="">Mobile Number : </label>
        <input type="text" name="MobileNo" value={MobileNo} onChange={(e) => { handlechange(e) }} /> <br /><br />

        <button type="button" onClick={() => handlesubmit()}>Add User</button>
        <button type="button" onClick={updateUser}>Update User</button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th >Id </th>
            <th >First Name</th>
            <th >Date Of Birth</th>
            <th >Email Id</th>
            <th >Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {Users.map((User, i) => {
            return <tr key={i}>
              <td>{User.id}</td>
              <td>{User.FirstName}</td>
              <td>{User.DateofBirth}</td>
              <td>{User.EmailId}</td>
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
