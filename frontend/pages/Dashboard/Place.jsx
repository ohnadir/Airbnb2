import React from 'react'
import DashboardLayout from '../../Components/Layouts/DashboardLayout';
import { useDispatch, useSelector } from 'react-redux'

const Place = () => {
    const { loading, products, error } = useSelector(state => state.products);
  return (
    <div>Place {products?.data?.length}</div>
  )
}
Place.Layout = DashboardLayout;
export default Place