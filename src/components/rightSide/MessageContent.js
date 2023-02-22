import { Avatar, Space, Typography } from 'antd'
import React from 'react'
import { UserOutlined } from '@ant-design/icons';
import {useSelector} from 'react-redux';

const { Title, Text } = Typography;

const MessageContent = () => {

  const clickedMessage = useSelector((state) => state.inbox.clickedMessage)


  return (
    <div className='messageContent'>
        <Space>
            <Avatar size={60} src={clickedMessage.image} icon={<UserOutlined />} />

            <div>
                <Title level={4}>{clickedMessage.name}</Title>
                <p>{clickedMessage.last_messag}</p>
                <div style={{position: 'absolute', display: 'flex', right: 100,}}>
                    <Text>{clickedMessage.time}</Text>
                </div>
                 
                
            </div>
        </Space>
    </div>
  )
}

export default MessageContent