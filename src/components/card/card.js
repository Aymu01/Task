import React from 'react'
import {Row, Col,Form,Input,DatePicker,Select } from 'antd';
import Style from './card.module.css'
const Card = ({choose,title}) =>  {
  return (
    <div className={Style.form}>
    <div className={Style.title}>{title}</div>
    {
        choose === 'personal'
        &&
        <Row gutter={16}>
        <Col span={12}>
          <p className={Style.label}>Ad</p>
          <Form.Item
          name='name'
           >
            <Input size='large' />
          </Form.Item>
        </Col>
        <Col span={12}>
          <p className={Style.label}>Soyad</p>
          <Form.Item 
          name='surname'
          >
            <Input size='large'   />
          </Form.Item>
        </Col>
        <Col span={12}>
          <p className={Style.label}>Doğum tarixi</p>
          <Form.Item
          name='date'
           >
          <DatePicker  size='large' style={{width:'100%'}}/>
          </Form.Item>
        </Col>
        <Col span={12}>
          <p className={Style.label}>Cins</p>
          <Form.Item
          name='gender'
           >
          <Select size='large'>
            <Select.Option value="0">Kişi</Select.Option>
            <Select.Option value="1">Qadın</Select.Option>
          </Select>
          </Form.Item>
        </Col>
  
       </Row>
    }
      {
        choose !== 'personal'
        &&
        <Row gutter={16}>
        <Col span={12}>
          <p className={Style.label}>Əvcəlki iş yeri</p>
          <Form.Item
          name='lastWork'
           >
            <Input size='large' />
          </Form.Item>
        </Col>
        <Col span={12}>
          <p className={Style.label}>İndiki iş yeri</p>
          <Form.Item 
          name='newWork'
          >
            <Input size='large'   />
          </Form.Item>
        </Col>
        <Col span={10}>
          <p className={Style.label}>Əmək kitabçası nömrəsi</p>
          <Form.Item
          name='workNumber'
           >
          <Input size='large'   />
          </Form.Item>
        </Col>
        <Col span={7}>
          <p className={Style.label}>SSN</p>
          <Form.Item
          name='ssn'
           >
           <Input size='large'   />
          </Form.Item>
        </Col>
        <Col span={7}>
          <p className={Style.label}>Str. vahidi</p>
          <Form.Item
          name='str'
           >
          <Input size='large'   />
          </Form.Item>
        </Col>

       </Row>
    }
    
     </div>
  )
}

export default Card