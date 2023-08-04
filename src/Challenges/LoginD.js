import React, { useId, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { useGlobalContext } from "../Context/context.js"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function LoginD(props) {
  const { userId, setUserId, setJwtToken, setVerticleHeadId } = useGlobalContext()

  const [errPsw, seterrPsw] = useState("none")
  const [err, seterr] = useState("none")
  const [password, setPassword] = useState("")

  const forgetPaswword = () => {
    navigate("/forget-password")
  }

  const navigate = useNavigate()

  //  var emp = 'NirajBhivasane';
  //  var emp = 'JayendraYadav';
  //  var emp = 'ShubhamRai';
  //  var man ='RiddhiMadhu';

  //  var empPsw = 'niraj46';
  //  var manPsw = 'riddhi@123';

  //     console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }

  async function loginUser() {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        userId: userId,
        password: password,
      })
      console.log(response)
      // setUserId(response.data.id)
      setVerticleHeadId(response.data.verticleHeadId)
      //   console.log("hello world")
      //   console.log(response.data.user.id, "employee id")
      //   setJwtToken(response.data.jwtToken)
      //   document.cookie = `auth=${response.data.jwtToken}`

      if (response.data.data.employeeRole == "Employee") {
        navigate("/Employee")
      } else if (response.data.data.employeeRole == "Manager") {
        navigate("/Manager")
      } else if (response.data.data.userName === null) {
        toast.error(response.data.errorMsg)
      }
    } catch (error) {
      // seterrPsw("block")
      toast.error("Invalid employee id or password!")
    }
  }

  // const Submit = () => {
  //     props.setnum('')
  //     props.setPassword('')
  //     if (props.num == emp) {
  //         if (props.Password == empPsw) {
  //             navigate('/Employe')
  //         } else {
  //             seterrPsw('block')
  //         }

  //     } else if (props.num == emp) {
  //         seterr('block')
  //     } else if (props.num == man) {
  //         if (props.Password == manPsw) {
  //             navigate('/manegar')
  //         } else {
  //             seterrPsw('block')
  //         }
  //     } else if (props.num !== emp) {
  //         seterr('block')
  //     }
  // }

  const paw = (e) => {
    var P = e.target.value
    props.setPassword(P)
  }

  return (
    <>
      <div className="loginD">
        <div className="loginD_containar">
          <div className="images">
            <img src="images/AL_MULLA.png" className="waveC" alt="wave" />
            {/* <img src="images/bg.svg" className='phoneimg' alt='bg' /> */}
          </div>
          <div className="loginD_from">
            <img src="images/avatar.svg" alt="avatar" />
            <h2> Task Tracker </h2>
            <div className="inputBox">
              <i className="fa-solid fa-user icon"></i>
              <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
              <div className="underline"></div>
              <label> Employee Id</label>
            </div>
            <div className="inputBox">
              <i className="fa-solid fa-lock icon"></i>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div className="underline"></div>
              <label> Enter Password </label>
            </div>
            <div className="err_msg">
              {/* <h3 style={{ display: err }}>  Please Enter Correct Username</h3> */}
              {/* <h3 style={{ display: errPsw }}> Please Enter Valid Credential. </h3> */}
              <a className="forget-password" onClick={forgetPaswword}>
                Forget Password?
              </a>
            </div>
            <button className="login-button" onClick={loginUser}>
              {" "}
              Submit{" "}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default LoginD
