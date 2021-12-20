import React, {useState} from 'react';

/* The control should accept a label.
- The control should accept a validation function with a configurable error message.
- The control can be incorporated inside a `<form>` and the selected option pushed up to the form.
- The control should fire an event on change.
*/

function FormControl(props) {
  const { label, users, setUserId } = props;

  const userChange =(e) => {
    setUserId(e.target.value);
  }

    return (
      <div>
            <label> { label } : </label> <br />
            <select name="users" onChange={(e)=>setUserId(e.target.value)} style={{padding:'5px',width:'180px',margin:'5px'}}>
              <option value=''> -select- </option>
             { users.length && users.map((user,i)=> (
             <option key={i} value={user.id}> {user.name} </option> )
             )}
            </select>
      </div>
    )
}
 
export default FormControl;
