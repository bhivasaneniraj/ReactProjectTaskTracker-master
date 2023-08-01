import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Style.css"
import axios from "axios"
import { useGlobalContext } from "../Context/context.js"

function EmployeBTN() {
  const [Serr, setSerr] = useState("none")
  const [GoHome, setGoHome] = useState("none")
  const [Data, setData] = useState()
  const textInput = useRef(null)

  const { userId, jwtToken } = useGlobalContext()

  var date = new Date().getDate()
  var month = new Date().getMonth() + 1
  var year = new Date().getFullYear()

  var FullDate = `${date}/${month}/${year}`

  //  async function Submittask () {

  //    try {
  //     const url = "localhost:8089/user/12345"
  //     const data = { 'taskDetails': 'Hello My Name is Shubham' };
  //     const options = {
  //       method: 'POST',
  //       headers: { 'content-type': 'application/json' } ,
  //       data,
  //       url,
  //     };
  //     const response = await axios(options);
  //      console.log(response);
  //    } catch (error) {
  //      console.error(error);
  //    }
  //  }
  // async function Submittask () {
  // axios.post('https://localhost:8089/user/12345').then(
  //   (res) => {
  //     console.log('Axios:',res);
  //     console.log('Axios data:',res.data);
  //   }).catch((err) => { console.log('Axios Error:', err); })
  // axios.create(
  //   {
  //           baseURL: "https://localhost:8089/user/12345",
  //           withCredentials: false,
  //           headers: {
  //             'Access-Control-Allow-Origin' : '*',
  //             'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  //         }
  //     })
  // }
  async function handleSubmit() {
    const headers = {
      Authorization: `Bearer ${jwtToken}`,
    }
    try {
      const data = { taskDetails: textInput.current.value }
      const response = await axios.post(`http://localhost:8081/user/${userId}`, data, { headers })
      console.log(response, "employ task")
    } catch (e) {
      console.log(e)
    }
  }
  const sunmit = () => {
    if (Data === undefined || Data === "") {
      setSerr("block")
    } else {
      console.log(Data)
      setGoHome("block")
      handleSubmit()
    }
  }

  const valChange = (e) => {
    setData(e.target.value)
  }

  const navigate = useNavigate()

  return (
    <>
      <div className="employeBTN">
        <div className="Show_err" style={{ display: Serr }}>
          <h3>Error</h3>
          <p>Please Fill The Task Details</p>
          <button onClick={() => setSerr("none")}> OK </button>
        </div>

        <div className="empoly">
          <div className="date">
            <span> Date: {FullDate} </span>
          </div>
          '
          <div className="welcom_page">
            {/* <select name="select" id="">
              <option value="Present">Present</option>
              <option value="First Half Leave">First Half Leave</option>
              <option value="Second Half Leave">Second Half Leave</option>
              <option value="Full Day Leave">Full Day Leave</option>
            </select> */}
            <select class="form-select" aria-label="Default select example">
              <option selected>Present</option>
              <option value="1">First Half Leave</option>
              <option value="2">Second Half Leave</option>
              <option value="3">Full Day Leave</option>
            </select>
          </div>
          <div className="EmployTask">
            <label> Add Task- </label>
            <div className="putTask">
              <textarea className="itstextarea" cols="30" rows="10" onChange={valChange} ref={textInput} />
            </div>
          </div>
          <div className="Em_Btn">
            <button className="Em-Btn1 raise" onClick={sunmit}>
              Submit Task
            </button>
          </div>
        </div>
      </div>
      <div className="After_Submit" style={{ display: GoHome }}>
        <div className="employe_Submit_box">
          <div className="After_Submit_box">
            <h1>
              {" "}
              You Successfully Added <br /> The Task{" "}
            </h1>
            <button onClick={() => navigate("/")}> OK </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmployeBTN
