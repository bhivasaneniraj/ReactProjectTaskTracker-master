import React, { Component, useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"
import Moment from "moment"

import { useGlobalContext } from "../Context/context.js"

import "./Style.css"
import moment from "moment"
function TaskDatail() {
  const [loading, setLoading] = useState(true)

  const { userId, jwtToken } = useGlobalContext()

  const TodayDate = new Date()
  const formatDate = Moment().format("LL")

  const [selectedDate, setselectedDate] = useState(TodayDate)
  const [leaves, setLeaves] = useState([])
  const [empLeaves, setEmpleaves] = useState("")

  const [startDate, setStartDate] = useState(new Date())

  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth="))
      ?.split("=")[1]

    const headers = {
      Authorization: `Bearer ${cookieValue}`,
    }

    console.log("ok")

    const reqBody = {
      leaves: empLeaves,
    }
    console.log(reqBody)
    const apiRequest = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/task/employeeInfo`, reqBody)
        setdata(response.data)
        console.log(response)
        console.log("hello world")
        if (response.data) setLoading(false)
      } catch (e) {
        console.log(e)
        console.log("ginvig error")
      }
    }
    // useEffect( ()=> {
    //   const apiRequest = async () => {
    //     const response = await axios.get(`http://localhost:8081/task/currentdate`, {headers})
    //     setdata(response.data)
    //     console.log(response)
    //   }

    apiRequest()
  }, [empLeaves])

  const [data, setdata] = useState([
    //     async function getDetails() {
    //   try {
    //     alert()
    //     const response = await axios.get('http://localhost:8089/task/currentdate');
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // {
    //   id: 1,
    //   Name: 'Niraj Bhivasane',
    //   task: ['Today i m Creating A Frontend Project With Reactjs ,Task2'],
    //   Date: ''
    // },
    // {
    //   id: 2,
    //   Name: 'Shubham Rai',
    //   task: ['Today i Creating Api  '],
    //   Date: '27/8/2022'
    // },
    // {
    //   id: 3,
    //   Name: 'Jayendra Yadav',
    //   task: ['Today I creating Database Table in OracleDB'],
    //   Date: '27/8/2022'
    // },
    // {
    //   id: 4,
    //   Name: 'SuryPraksah Verma',
    //   task: ['Today Im Creating City Api',],
    //   Date: '27/8/2022'
    // },
    // {
    //   id: 5,
    //   Name: 'Vaibhav Jadhav',
    //   task: ['Creating Api Code Validation For Complaint Module'],
    //   Date: '27/8/2022'
    // },
    // {
    //   id: 6,
    //   Name: 'Shubham Sawant',
    //   task: ['Creating Api Code Validation For Complaint Module'],
    //   Date: '27/8/2022'
    // },
  ])

  //  class task extends Component(){
  //   constructor(props){
  //     super(props)
  //     this.Task_detail_table={

  //     }
  //

  //  }

  if (loading) {
    ;<div>loading...</div>
  }

  moment(new Date()).format("DD/MM/YYYY")

  useEffect(() => {
    axios
      .get("http://localhost:8081/task/leaves")
      .then((response) => {
        setLeaves(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  var date = new Date().getDate()
  var month = new Date().getMonth() + 1
  var year = new Date().getFullYear()

  var FullDate = `${date}/${month}/${year}`

  return (
    <>
      <div className="TakeDetail">
        <div className="tables">
          <div className="welcom_page">
            {/* <select class="form-select" aria-label="Default select example" onChange={(e) => setEmpleaves(e.target.value)}> */}
            <p>Name</p>
            <select class="form-select" aria-label="Default select example">
              {/* {leaves.map((x) => {
                return <option value={x.allLeaves}>{x.allLeaves}</option>
              })} */}
              <option selected>select</option>
              <option value="Niraj Bhivasane">Niraj Bhivasane</option>
              <option value="Shubham Rai">Shubham Rai</option>
            </select>
          </div>
          <div className="welcom_page">
            {/* <select class="form-select" aria-label="Default select example" onChange={(e) => setEmpleaves(e.target.value)}> */}
            <p>Leaves</p>
            <select class="form-select" aria-label="Default select example">
              {/* {leaves.map((x) => {
                return <option value={x.allLeaves}>{x.allLeaves}</option>
              })} */}
              <option selected>select</option>

              <option value="First Half">First Half</option>
              <option value="Second Half">Second Half</option>
            </select>
          </div>

          <div className="welcom_page">
            {/* <select class="form-select" aria-label="Default select example" onChange={(e) => setEmpleaves(e.target.value)}> */}
            <p>Date</p>
            <div className="date">
              <DatePicker className="date-picker" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
          </div>

          {/* <div className="Task_detail_table">
            <table>
              <thead>
                <tr>
                  <th> No. </th>
                  <th> Name </th>
                  <th> Task </th>
                  <th> Date </th>
                </tr>
              </thead>
              {data.map((val, index) => {
                return (
                  <>
                    <tbody key={index}>
                      <tr key={index}>
                        <td> {index + 1} </td>
                        <td> {val[0]} </td>
                        <td className="zero" style={{ width: "60%" }}>
                          <>
                            <div className="Each_task">
                              <h6> {val[1]} </h6>
                            </div>
                          </>
                        </td>
                        <td>
                          {" "}
                          {val[2]} {formatDate}{" "}
                        </td>
                      </tr>
                    </tbody>
                  </>
                )
              })}
            </table>
          </div> */}

          <div className="Em_Btn">
            <button className="Em-Btn1 raise">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskDatail
