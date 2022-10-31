import React from 'react'
import style from "../../styles/Dashboard.module.css";
import DashboardLayout from '../../Components/Layouts/DashboardLayout';

const index = () => {

  return (
    <>
      <h1 className="text-4xl py-4 text-center">Welcome to Dashboard</h1>
    </>
  )
}
index.Layout= DashboardLayout;
export default index