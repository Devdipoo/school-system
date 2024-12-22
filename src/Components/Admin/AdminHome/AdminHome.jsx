import { Outlet } from 'react-router-dom'
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import Navbar from '../../Common/Navbar/Navbar'

function AdminHome() {
  return (
    <div className="flex h-screen">
      <AdminSideBar />
      <div className="w-full">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default AdminHome
