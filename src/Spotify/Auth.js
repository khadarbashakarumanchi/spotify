import React from 'react'
import { Outlet } from 'react-router-dom'
import TopNavbar from './TopNavbar'

export default function Auth() {
  return (
    <div>
      <TopNavbar />
      <Outlet />
    </div>
  )
}
