import { Avatar, Space, Typography } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const MessageContent = () => {
  return (
    <div className='messageContent'>
        <Space>
            <Avatar size={60} icon={<UserOutlined />} />

            <div>
                <Title level={4}>Messages</Title>
                <p>noor</p>
                <div style={{position: 'absolute', display: 'flex', right: 100,}}>
                    <Text>20:02</Text>
                </div>
                 
                
            </div>
        </Space>
    </div>
  )
}

export default MessageContent