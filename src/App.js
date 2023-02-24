import { Col, Row } from 'antd';
import { Typography } from 'antd';
import './App.scss'
import LeftSide from "./components/leftSide/LeftSide";
import RightSide from "./components/rightSide/RightSide";
import { Provider } from 'react-redux';
import store from './redux/store'
const { Title } = Typography;

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Title level={3}>Messages</Title>
        <Row>

          <Col span={6} className='leftSide'>
            <LeftSide />
          </Col>

          <Col span={15} className='rightSide'>
            <RightSide/>
          </Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;
