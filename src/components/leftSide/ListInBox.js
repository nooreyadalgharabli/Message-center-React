import React, { useEffect } from "react";
import { Avatar, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { captureID, fetchUsers } from "../../redux";

const ListInBox = () => {
  const contactList = useSelector((state) => state.inbox.users);
  const clickedMessage = useSelector((state) => state.inbox.clickedMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return contactList.loading ? (
    <h2>Loading</h2>
  ) : contactList.error ? (
    <h2>{contactList.error}</h2>
  ) : (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      dataSource={contactList}
      renderItem={(item) => (
        <List.Item
          key={item.user_id}
          onClick={() => {
            dispatch(captureID(item.user_id));
          }}
          style={{
            backgroundColor:
              clickedMessage.user_id === item.user_id ? "#5773cc" : null,
            padding: '12px 20px',
          }}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.image} />}
            title={item.name}
            description={<div style={{height:30 }}><p style={{width: '100%', height:'80%' , overflow:'hidden'}}>{item.last_messag}</p></div>}
            style={{maxHeight: 60,}}
          />
          <div>{item.time}</div>
        </List.Item>
      )}
    />
  )
}

export default ListInBox;
