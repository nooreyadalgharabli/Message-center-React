import React, { Fragment } from 'react'

import { Avatar, List } from 'antd';

const contactList = [
    {
    user_id: 1,
    name: "Ahmed",
    last_messag: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
    user_id: 2,
    name: "Noor",
    last_messag: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/2-image.jpg",
    },
    {
    user_id: 3,
    name: "Rawan",
    last_messag: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/3-image.jpg",
    },
    {
    user_id: 4,
    name: "Ali",
    last_messag: "test last message",
    date: "26/01/2023",
    image: "https://reqres.in/img/faces/4-image.jpg",
    },
    ]

const ListInBox = () => {
  
  return (
    <Fragment>
    <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={contactList}
    renderItem={(item) => (
      <List.Item>
        
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={item.name}
            description={item.last_messag}
          />
          <div>{item.date}</div>
        
      </List.Item>
    )}
  />
  </Fragment>
  )
}

export default ListInBox