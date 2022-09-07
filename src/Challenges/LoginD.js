import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useGlobalContext} from '../Context/context.js'

function LoginD(props) {

    const {setUserId,setJwtToken, setVerticleHeadId} = useGlobalContext();

     const [errPsw, seterrPsw] = useState('none');
     const [err, seterr] = useState('none');

     const navigate = useNavigate();



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
          
          const response = await axios.post('http://localhost:8080/authenticate', {
            "userName": props.num,
            "userPassword": props.Password
        });
        console.log(response)
        setUserId(response.data.user.id)
        setVerticleHeadId(response.data.user.verticleHeadId)
        console.log("hello world")
        console.log(response.data.user.id,"employee id")  
        setJwtToken(response.data.jwtToken) 
        document.cookie = `auth=${response.data.jwtToken}`
        
if(response.data.user.role[0].roleName=='Employee'){
    navigate('/Employe')
}else if(response.data.user.role[0].roleName=='Manager'){
    navigate('/manegar')
}else{
    navigate('/login')
}
        } catch (error) {
            seterrPsw('block')
          console.error(error);
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
                        <img src="images/AL_MULLA.png" className='waveC' alt='wave' />
                        {/* <img src="images/bg.svg" className='phoneimg' alt='bg' /> */}
                    </div>
                    <div className="loginD_from">
                        <img src="images/avatar.svg" alt='avatar' />
                        <h2> Task Tracker </h2>
                        <div className="inputBox">
                            <i className="fa-solid fa-user icon"></i>
                            <input type="text" required onChange={props.number} value={props.num || ''} />
                            <div className="underline"></div>
                            <label> Username</label>
                        </div>
                        <div className="inputBox">
                            <i className="fa-solid fa-lock icon"></i>
                            <input type="password" required onChange={paw} value={props.Password || ''} />
                            <div className="underline"></div>
                            <label> Enter Password </label>
                        </div>
                        <div className="err_msg">
                            {/* <h3 style={{ display: err }}>  Please Enter Correct Username</h3> */}
                            <h3 style={{ display: errPsw }}> Please Enter Valid Credential. </h3>
                        </div>
                        <button onClick={loginUser}>  Submit </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginD