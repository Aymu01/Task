import Style from './App.module.css';
import { Row, Col, Form, Button } from 'antd';
import Card from './components/card/card';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './redux/form/formSlice';
import Person from './components/person/person';
function App() {
  const data = useSelector((state) => state.form.data)
  const dispatch = useDispatch()
  console.log(data);
  return (
    <div className={Style.App}>
      <Form onFinish={(data) => dispatch(addData(data))}>
        <Row gutter={16}>
          <Col span={12} >
            <Card choose='personal' title={'Şəxsi məlumatları'}/>
          </Col>
          <Col span={12} >
            <Card choose='work' title={'İş yeri məlumatları'} />
          </Col>
        </Row>
        <div className={Style.button}>
          <Button type='primary' htmlType='submit' size='large'>Göndər</Button>
        </div>
      </Form>
<Person/>
    </div>
  );
}

export default App;
