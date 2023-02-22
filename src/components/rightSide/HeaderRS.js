import React from 'react'
import { Avatar, Button, Space, Typography } from 'antd';
import { UserOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons';

const { Title } = Typography;

const HeaderRS = () => {
  return (
    <div className='headerRS'>
        <Space>
            <Avatar size={64} icon={<UserOutlined />} />

            <div>
                <Title level={4}>Messages</Title>
                <p>Trainer</p>
            </div>
        </Space>

        <div style={{position: 'absolute', display: 'flex', top: 10, right: 10}}>
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