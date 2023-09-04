function CreatePassword() {
  // function ForgetPassword() {
  //   const [newPassword, setNewPassword] = useState("")
  //   const [confirmPassword, setConfirmPassword] = useState("")
  //   const [userId, setUserId] = useState("")

  //   const handleSubmit = async (e) => {
  //     e.preventDefault()

  //     try {
  //       const response = await axios.post(`http://localhost:8081/user/resetpassword/${userId}`, {
  //         responsePassword: confirmPassword,
  //       })
  //       console.log(response)

  //       if (response.data === true) {
  //         toast.success("Password updated successfully!")
  //         console.log(newPassword, confirmPassword)
  //       } else {
  //         toast.error("please enter the correct UserId")
  //       }
  //     } catch (error) {
  //       toast.error("An error occurred while updating the password.")
  //       console.error(error)
  //     }
  //   }

  return (
    <>
      <div className="loginD">
        <div className="loginD_containar forget-container">
          <div className="images">
            {/* <img src="images/AL_MULLA.png" className="waveC" alt="wave" /> */}
            {/* <img src="images/bg.svg" className='phoneimg' alt='bg' /> */}
          </div>
          <div className="forget-password-form">
            <img src="images/AL_MULLA.png" alt="al mulla task tracker" style={{ marginTop: "20px;" }} />
            {/* <h2> Task Tracker </h2> */}
            <div className="inputBox">
              <i className="fa-solid fa-user icon"></i>
              <input type="text" required />
              <div className="underline"></div>
              <label>User Id</label>
            </div>
            <div style={{ marginTop: "20px" }} className="inputBox">
              <i className="fa-solid fa-envelope icon"></i>
              <input type="password" required />
              <div className="underline"></div>
              <label>Email Id</label>
            </div>
            <button className="update-button"> Submit </button>
            <button className="bk-btn" onClick={() => (window.location.href = "/")}>
              {" "}
              Back{" "}
            </button>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </>
  )
}

export default CreatePassword
