import React from 'react'
import style from "../../styles/Dashboard.module.css";
import DashboardLayout from '../../Components/Layouts/DashboardLayout';

const Main = () => {

  return (
    <>

      <h1 className="text-4xl py-4 text-center">
        Select a team member to get started
      </h1>
    </>
  )
}
Main.Layout= DashboardLayout;
export default Main