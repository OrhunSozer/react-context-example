import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

const UserContext = createContext(null);

export const UserProvider = ({children}) =>{
    const [filter, setFilter] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => {
                setUsers(res.data);
                console.log("user context loaded!")
            })
            .catch(e=>console.log(e))
            
    },[]);

    const values = {
		users,
		filteredUsers: users.filter((data) =>
			data.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
		),
		setUsers,
		filter,
		setFilter,
    };
    
return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContext

