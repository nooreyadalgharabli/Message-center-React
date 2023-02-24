import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchLSContainer = () => {
  return (
    <div>
      <Search style={{marginLeft:10, marginRight:10, width: 'auto', display: 'flex' }}  placeholder="Search" onSearch={onSearch} shape="circle" enterButton />    
    </div>
  )
}

export default SearchLSContainer