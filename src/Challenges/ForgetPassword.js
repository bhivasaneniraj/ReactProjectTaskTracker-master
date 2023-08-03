import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"
import { useGlobalContext } from "../Context/context"

function ForgetPassword() {
  const { userId } = useGlobalContext()
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newPassword === confirmPassword)
      try {
        // Make the API call to update the password
        const response = await axios.post(`http://localhost:8081/user/resetpassword/${userId}`, {
          responsePassword: newPassword,
        })
        console.log(response)

        if (response.data === true) {
          // Check the API response to see if the password update was successful
          toast.success("Password updated successfully!")
          console.log(newPassword, confirmPassword)
        } else {
          toast.error("please enter the correct password")
        }
      } catch (error) {
        toast.error("An error occurred while updating the password.")
        console.error(error)
      }
  }

  return (
    <>
      <div className="loginD">
        <div className="loginD_containar forget-container">
          <div className="images">
            {/* <img src="images/AL_MULLA.png" className="waveC" alt="wave" /> */}
            {/* <img src="images/bg.svg" className='phoneimg' alt='bg' /> */}
          </div>
          <div className="loginD_from forget-password-form">
            <img src="images/AL_MULLA.png" alt="al mulla task tracker" />
            <h2> Task Tracker </h2>
            <div className="inputBox">
              <i className="fa-solid fa-user icon"></i>
              <input type="text" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
              <div className="underline"></div>
              <label>User Id</label>
            </div>
            <div style={{ marginTop: "20px" }} className="inputBox">
              <i className="fa-solid fa-lock icon"></i>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              <div className="underline"></div>
              <label>New password </label>
            </div>
            <button className="login-button" onClick={handleSubmit}>
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

export default ForgetPassword
