import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TestPage from './components/test'

const TestHome = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<TestPage />}/>
      </Routes>
    </div>
  )
}

export default TestHome