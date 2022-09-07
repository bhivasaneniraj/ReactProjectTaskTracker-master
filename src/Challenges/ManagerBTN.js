import React from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ManagerBTN() {
 
  // async function getDetails() {
  //   try {
  //     const response = await axios.get('http://localhost:8089/task/currentdate');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();
  const submitTask = () =>{
    navigate1('/Employe')
  }

  const ViewTask = () =>{
    navigate2('/taskdatail')
  }

  const undermgr = () =>{
    navigate3 ('/mgr')
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
                        <button className='btn1' onClick={ViewTask}>All  Details <i class="fa-solid fa-arrow-right-long arrowI"></i> </button>
                        <button className='btn3' onClick={undermgr} >Teams Details <i class="fa-solid fa-arrow-right-long arrowI"></i></button> 
                        <button className='btn2' onClick={submitTask} >Add Task <i class="fa-solid fa-arrow-right-long arrowI"></i></button>
                        
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default ManagerBTN





















