import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'

function Routers() {
  return (
    <Routes>
        <Route path='/' exact element={<App/>} />
    </Routes>
  )
}

export default Routers