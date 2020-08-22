import React from 'react';
import { List } from 'antd';

export default function UserInfo() {

    const data = [
        'email: leo@gmail.com',
        'lastname: gimenez',
        'name: leonardo',
        'id: 1',
       
      ];
    
    
    return (
    
    <div  className="bg-list">
            <List
            header={<h5>User Info</h5>}
            bordered
            dataSource={data}
            renderItem={item => (
                <List.Item>
                 <p>{item}</p>
                </List.Item>
            )}
            />  
    </div>


);



}
