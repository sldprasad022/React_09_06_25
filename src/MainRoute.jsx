import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUser from './components/user/AddUser'

const MainRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<AddUser/>}/>
    </Routes>
  )
}

export default MainRoute