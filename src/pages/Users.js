import React from 'react'
import NewUser from '../components/NewUser';
import List from "../components/List";
import { UserProvider } from "../contexts/UserContext";
import FilterUser from "../components/FilterUser";

function Users() {
    return (
        <div style={{width: 600, padding: 30}}>
            <UserProvider>
                <NewUser style={{margin: 10, float:"left"}}/>
                <FilterUser/>
                <List style={{margin: 10, float:"left"}}/>
			</UserProvider>
        </div>
    )
}

export default Users
