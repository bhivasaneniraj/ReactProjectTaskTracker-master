import React from "react"
import "./Style.css"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function ManagerBTN() {
  // async function getDetails() {
  //   try {
  //     const response = await axios.get('http://localhost:8089/task/currentdate');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const navigate1 = useNavigate()
  const navigate2 = useNavigate()
  const navigate3 = useNavigate()
  const submitTask = () => {
    navigate1("/Employee")
  }

  const ViewTask = () => {
    navigate2("/task-details")
  }

  const undermgr = () => {
    navigate3("/mgr")
  }

  // async function getDetails() {
  //   try {
  //     const response = await axios.get('localhost:8089/task/currentdate');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }

  return (
    <>
      <div className="manegarBTN">
        <div className="manegar">
          <div className="button">
            <button className="btn1 managerButen raise" onClick={ViewTask}>
              All Details
            </button>
            <button className="btn3 managerButen raise" onClick={undermgr}>
              Team Details
            </button>
            <button className="btn2 managerButen raise" onClick={submitTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ManagerBTN
