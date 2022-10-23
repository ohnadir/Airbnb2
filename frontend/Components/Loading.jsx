import React from 'react'
import { Spin } from 'antd';
import style from "../styles/spin.module.css"

export const Loading = () => {
  return (
    <div style={style.spin}>
        <Spin />
    </div>
  )
}
