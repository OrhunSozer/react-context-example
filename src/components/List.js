import React, {useContext} from 'react'
import { List as AntList, Avatar } from 'antd';
import 'antd/dist/antd.css'; 

import UserContext, { UserProvider } from "../contexts/UserContext";
import FilterUser from "../components/FilterUser";

function List() {
    const { users, filteredUsers, setUsers } = useContext(UserContext);

    const handledelete = (id)=>{
        const filtered = users.filter((user) => user.id !== id);
        setUsers(filtered);
    }

    return (
        <>
            <AntList
                size="small"
                header={<h3>Users</h3>}
                footer={<h4>List: {filteredUsers.length} of {users.length} users </h4>}
                bordered
                dataSource={filteredUsers}
                height={400}
                renderItem={item => (
                    <AntList.Item actions={[<span key="list-delete" onClick={()=>handledelete(item.id)} style={{color:"red", cursor:"pointer"}}>delete</span>]}>
                    <AntList.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.name}
                    description={item.email}
                    />
                </AntList.Item>
                )}
            />
        </>
    )
}

export default List
