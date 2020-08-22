import React from 'react';
import { Form, Input, Button } from 'antd';


export default function FormRegisterUser () {

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };

      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
      
      
        const onFinish = values => {
          console.log('Success:', values);
        };
    
      
        const onFinishFailed = errorInfo => {
          console.log('Failed:', errorInfo);
        };

    return(

     <div className="container">   
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
    <label>User name</label>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input placeholder="User name" />
      </Form.Item>

      <label>Last name</label>
      <Form.Item
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your Lastname!',
          },
        ]}
      >
        <Input placeholder="Last name" />
      </Form.Item>

      <label>Email</label>  
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your correct Email!',
            type: 'email'
          },
        ]}
      >
        <Input placeholder="Emal" />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Save User
        </Button>
      </Form.Item>
    </Form>
    </div>
    );
}
