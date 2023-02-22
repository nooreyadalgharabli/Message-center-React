import React, { Fragment, useEffect } from 'react'
import { Avatar, List } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { captureID, ContactList } from '../../redux/messages/Actions';


const ListInBox = () => {

  const contactList = useSelector((state) => state.inbox.data)
  const clickedMessage = useSelector((state) => state.inbox.clickedMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ContactList())
  },[dispatch])
  
  return (
    <Fragment>
    <List
    className="demo-loadmore-list"
    itemLayout="horizontal"
    dataSource={contactList}
    renderItem={(item) => (
      <List.Item key={item.user_id} style={{backgroundColor: clickedMessage.user_id === item.user_id ? 'cornflowerblue' : null}}>
        
          <List.Item.Meta
            onClick={() => {dispatch(captureID(item.user_id))}}
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