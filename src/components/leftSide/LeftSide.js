import React, { Fragment } from 'react'
import './leftSide.css'
import { Divider } from 'antd';
import HeaderLS from './HeaderLS';
import SearchLSContainer from './SearchLSContainer';
import InBoxContainer from './InBoxContainer';


const LeftSide = () => {
  return (
    <Fragment>

      <HeaderLS />
      <Divider plain></Divider>
      <SearchLSContainer/>
      <Divider plain></Divider>
      <InBoxContainer/>
    
    </Fragment>
  )
}

export default LeftSide