import React, { Fragment, useState } from "react";
import { Select, Form, Input, Modal, Button, Divider } from "antd";
import { FormOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const ModalForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Fragment>
      <FormOutlined onClick={showModal} />

      <Modal
        title="Create Messages"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <p style={{margin:0}}>Messages</p>
        <Divider></Divider>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 25,
          }}
          layout="vertical"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          
          <Form.Item label="Send to">
            <Select style={{backgroundColor: '#f4f7fa'}} placeholder='select student'>
              <Select.Option value="demo">Students</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="User group">
            <Select placeholder='select user group'>
              <Select.Option value="demo">Students</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Users">
            <Select placeholder='select users'>
              <Select.Option value="demo">Students</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Trainer">
            <Select placeholder='Learner'>
              <Select.Option value="demo">Students</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Subject">
            <Input  placeholder='Enter the subject'/>
          </Form.Item>
          <Form.Item label="Message">
            <TextArea placeholder='Enter your message'/>
          </Form.Item>

          <Button type="primary" size='large' onClick={() => setIsModalOpen(false)}>Send Message</Button>
          
        </Form>
      </Modal>
    </Fragment>
  );
};

export default ModalForm;
