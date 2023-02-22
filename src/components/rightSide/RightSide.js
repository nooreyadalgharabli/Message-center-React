import { Divider } from 'antd'
import React, { Fragment } from 'react'
import HeaderRS from './HeaderRS'
import MessageContent from './MessageContent'
import './rightSide.css'

const RightSide = () => {
  return (
    <Fragment>
        <HeaderRS/>
        <Divider plain></Divider>
        <MessageContent/>
    </Fragment>
    )
}

export default RightSide