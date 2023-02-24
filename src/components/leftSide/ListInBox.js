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
          style={{
            backgroundColor:
              clickedMessage.user_id === item.user_id ? "#5773cc" : null,
          }}
        >
          <List.Item.Meta
            onClick={() => {
              dispatch(captureID(item.user_id));
            }}
            avatar={<Avatar src={item.image} />}
            title={item.name}
            description={item.last_messag}
          />
          <div>{item.time}</div>
        </List.Item>
      )}
    />
  );
};

export default ListInBox;
