import { Fragment } from "react";
import { Col, Row } from 'antd';
import { Typography } from 'antd';
import "./App.css";
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";
const { Title } = Typography;

function App() {
  return (
    <Fragment>
      <div className='App'>
        <Title level={2}>Messages</Title>
        <Row>

          <Col span={6} className='leftSide'>
            <LeftSide />
          </Col>

          <Col span={15} className='rightSide'>
            <RightSide/>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}

export default App;
