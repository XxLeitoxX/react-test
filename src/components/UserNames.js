import React from 'react';
import { List } from 'antd';

export default function UserNames() {

	
	const data = ['Leo', 'Gaby', 'Gene'];

	const  prueba = () => {
		console.log("Click");
	};

	return (
	<div className="bg-list">
			<List
			header={<h5>User Names</h5>}
			bordered
			dataSource={data}
			renderItem={item => (
				<List.Item>
				{item}
				</List.Item>
			)}
			/> 
	</div>


);
}
