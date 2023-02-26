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
            <div style={{width:'100%'}}>
                <Title level={4}>{clickedMessage.name}</Title>
                <p>
                  <div style={{position: 'relative'}}>
                    {clickedMessage.last_messag} 
                    <div style={{position:'absolute' ,right:0, paddingTop:10}}>
                      <Text>{clickedMessage.time}</Text>
                    </div>
                  </div>
                </p>
                
            </div>
        </Space>
    </div>
  )
}

export default MessageContent