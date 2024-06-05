import React from 'react'
import Styled from './person.module.css'
import Logo from '../../assets/image/logo.png'
import { EllipsisOutlined } from '@ant-design/icons'
const Person = () => {
  return (
    <div className={Styled.person}>
      <div className={Styled.three}>
      <EllipsisOutlined />
      </div>
      <div className={Styled.logo}>
        <img src={Logo} alt="person" />
      </div>
      <span className={Styled.name}>Nazim Vəliyev Sabir</span>
      <span className={Styled.position}>Şöbə müdiri</span>
      <span className={Styled.contact}>nazimvaliyev@gmail.com</span>
      <span className={Styled.contact}>+994-70-860-40-50</span>
    </div>
  )
}

export default Person
