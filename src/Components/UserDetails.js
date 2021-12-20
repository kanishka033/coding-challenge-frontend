import React from 'react';

function UserDetails({ selectedUser }) {
    return (
        <div className='user-details'>
        { selectedUser ? ( 
            <table>
            <tbody>
                <tr>
                    <td>  Name : </td>
                    <td> {selectedUser.name} </td>
                </tr>
                <tr>
                    <td> City : </td>
                    <td> {selectedUser.address.city} </td>
                </tr>
                <tr>
                    <td> Street : </td>
                    <td> {selectedUser.address.street} </td>
                </tr>
                <tr>
                    <td> Phone : </td>
                    <td> {selectedUser.phone} </td>
                </tr>
            </tbody>
            </table>
        ) : null }
      </div>
    )
}

export default UserDetails;
