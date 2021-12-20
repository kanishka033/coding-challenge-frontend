import './App.css';
import React, { useEffect, useState } from 'react';
import FormControl from './Components/FormControl';
import SimpleMap from './Components/SimpleMap';
import UserDetails from './Components/UserDetails';

function App() {

  const [users, setUsers] = useState([]);
  const [userId, setUserId]= useState('');
  const [values, setValues] = useState({
    userId: userId,
    title: "",
    body: ""
  })
  const [errmsg, setErrmsg] = useState('')

  const selectedUser = userId ? users.find((user)=> user.id == userId) : null;

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      if (!response.ok) {
        alert('something went wrong!');
      }
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const sendPost = async() => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    const res = await response.json();
    response.ok ? alert('post successful') : alert('something went wrong! try again')
    console.log(res);
    setErrmsg('');
    } catch(error) {
      console.log(error);
    }  
  }

  const submitForm =(e) => {
    e.preventDefault();
    if (values.title.trim().length == 0 || values.body.trim().length == 0) setErrmsg('fill fields')
    else if (!userId) setErrmsg('select a user')
    else sendPost();
  }
  
  return (
  <div className="App">
  <div className='container'>
    <div className='form-container'>
      <form className='form' onSubmit={(e)=>submitForm(e)}>
        <FormControl label={!selectedUser? 'Please Select User' : 'Selected User'} 
          users={users} 
          setUserId={setUserId} 
        />
        <input type="number" className='form-input' value={userId} placeholder="id" disabled/> <br />
        <input 
           type="text"
           className='form-input' 
           onChange={(e)=>setValues({...values, userId, title: e.target.value })} 
           placeholder="title" 
           required 
        /> <br/>
        <textarea 
          className='form-input'
          onChange={(e)=>setValues({...values, userId, body: e.target.value })}
          placeholder="body"  
          rows='5' 
          required 
        /> <br/>
        <button type="submit"> Submit </button> <span style={{color:"red"}}> {errmsg} </span>
      </form>
    </div>
      <UserDetails selectedUser={selectedUser}/>
    </div>
     <SimpleMap center={selectedUser? selectedUser.address.geo : null} /> 
  </div>
  );
}

export default App;
