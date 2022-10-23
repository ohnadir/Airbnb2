import React from 'react'
import { Spin } from 'antd';
import style from "../styles/spin.module.css"

export const Loading = () => {
  return (
    <div style={style.spinContainer}>
        <Spin />
    </div>
  )
}