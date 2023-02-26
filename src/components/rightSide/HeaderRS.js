import React from 'react'
import { Avatar, Button, Space, Typography } from 'antd';
import { UserOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'

const { Title } = Typography;

const HeaderRS = () => {

    const clickedMessage = useSelector((state) => state.inbox.clickedMessage)
    

  return (
    <div className='headerRS'>
        <Space>
            <Avatar size={64} src={clickedMessage.image} icon={<UserOutlined />} />

            <div>
                <Title level={4}>{clickedMessage.name}</Title>
                <p>Trainer</p>
            </div>
        </Space>

        <div className='headerRSButtons'>
            <Button style={{marginRight: 10}} type="primary" shape="round" icon={<MailOutlined />} size={"large"}>
                Replay
            </Button>
            <Button type="primary" shape="round" icon={<ContainerOutlined />} size={"large"}>
                Archive
            </Button>
        </div>
    </div>
  )
}

export default HeaderRS