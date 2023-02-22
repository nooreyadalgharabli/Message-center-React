import React from 'react'
import { Tabs } from 'antd';
import ListInBox from './ListInBox';


const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: `Inbox`,
    children: <ListInBox/>,
  },
  {
    key: '2',
    label: `sent`,
    children: <ListInBox/>,
  },
];

const InBoxContainer = () => {
  return (
      <div>
        <Tabs style={{marginLeft:10,}} defaultActiveKey="1" items={items} onChange={onChange} />;
      </div>
  )
}

export default InBoxContainer