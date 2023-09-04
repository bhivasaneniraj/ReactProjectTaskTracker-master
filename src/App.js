import React, { useState } from "react"
import EmployeBTN from "./Challenges/EmployeBTN"
import LoginD from "./Challenges/LoginD"
import ManagerBTN from "./Challenges/ManagerBTN"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ManegarTask from "./Challenges/ManegarTask"
import TaskDatail from "./Challenges/TaskDatail"
import UnderMgr from "./Challenges/UnderMgr"
import ForgetPassword from "./Challenges/ForgetPassword"
import CreatePassword from "./Challenges/CreatePassword"

function App() {
  const [num, setnum] = useState()
  const [Password, setPassword] = useState()

  const number = (e) => {
    var a = e.target.value
    setnum(a)
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginD num={num} number={number} setnum={setnum} Password={Password} setPassword={setPassword} />} />
          <Route path="/Employee" element={<EmployeBTN />} />
          <Route path="/Manager" element={<ManagerBTN />} />
          <Route path="/manager-task" element={<ManegarTask />} />
          <Route path="/task-details" element={<TaskDatail />} />
          <Route path="/mgr" element={<UnderMgr />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/create-password" element={<CreatePassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

// dropdown in navbar bootstrap 5
// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import TaskDatail from './Challenges/TaskDatail'

// function App() {
//   return (
//     <>
//     <TaskDatail />
//     </>
//   )
// }

// export default App
