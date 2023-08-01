import React, { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function ForgetPassword() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newPassword === confirmPassword) {
      // Passwords match, handle password update logic here (e.g., send to the server)
      toast.success("Password updated successfully!")
      console.log(newPassword, "hello")
    } else {
      toast.error("Please enter the correct password.")
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
            <img src="images/AL_MULLA.png" alt="avatar" />
            <h2> Task Tracker </h2>
            <div className="inputBox">
              <i className="fa-solid fa-lock icon"></i>
              <input type="text" value={newPassword} onChange={handleNewPasswordChange} required />
              <div className="underline"></div>
              <label> New password</label>
            </div>
            <div style={{ marginTop: "20px" }} className="inputBox">
              <i className="fa-solid fa-lock icon"></i>
              <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
              <div className="underline"></div>
              <label>confirm password </label>
            </div>
            <button className="login-button" onSubmit={handleSubmit}>
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
