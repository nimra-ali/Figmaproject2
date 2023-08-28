import React, { useState } from 'react';
import { Modal, Input, Button, Upload, Form, message } from 'antd';
import { EditOutlined, UploadOutlined } from '@ant-design/icons';
import './Edit.css'
const Editprofile = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const handleUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Perform further actions, such as updating the profile
    hideModal();
  };

  return (
    <div>
      <Button icon={<EditOutlined />} onClick={showModal}>
        Edit Profile
      </Button>
      <Modal
        title="Edit Profile"
        visible={visible}
        onCancel={hideModal}
        footer={null}
        width={800}
        height={1122}
        style={{
          // top: 150,
          // left: 400,
          borderRadius: 4,
        }}  
      >
        <Form form={form} onFinish={onFinish}>
          <Upload
            name="profileImage"
            showUploadList={false}
            customRequest={handleUpload}
          >
            <div style={{ marginBottom: 20 }}>
              <img
                src="your_profile_image_url"
                alt="Profile"
                style={{ width: 150, height: 150, borderRadius: '50%' }}
              />
              <div style={{ marginTop: 10 }}>
                <UploadOutlined /> Change Profile Picture
              </div>
            </div>
          </Upload>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Editprofile;