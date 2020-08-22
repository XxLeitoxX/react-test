import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import FormRegisterUser from './FormRegisterUser';



export default function AddUser() {

    const [state, setState] = useState({});

   
      const  showModal = () => {
        setState({
          visible: true,
        });
      };
    
    const  handleOk = () => {
        setTimeout(() => {
          setState({ loading: false, visible: false });
        }, 3000);
      };
    
      const  handleCancel = () => {
        setState({ visible: false });
      };

    const { visible } = state;

    return (
        <div>
            <Button type="primary" className="float-right" icon={<UserOutlined />} onClick={showModal}>
                Add User
            </Button>

            <Modal
                visible={visible}
                title="Add User"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
          <FormRegisterUser />
        </Modal>
        </div>

    );
}
