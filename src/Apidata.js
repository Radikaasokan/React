import React, { useState,useEffect } from 'react'

function Apidata() {

    const[users, setUsers]= useState([]);
    useEffect(() => {
        const fetchusers = async () => {
            try{
                const response = await fetch('https://reqres.in/api/users');
                const result = await response.json();
                setUsers(result.data);
             }
              catch (error) {
                console.log("error occured",error);
                }
            };
            fetchusers();
        }, []);

        return(
            <div>
                <ul>
                    {users.map((item) => (
                        <li key={item.id}>
                            <p>Email:{item.email}</p>
                            <p>First Name:{item.first_name}</p>
                            <p>Last Name:{item.last_name}</p>
                            <img src={item.avatar}/>
                             </li>
                    
                    ))}
                </ul>
            </div>
        );
        } 


export default Apidata;