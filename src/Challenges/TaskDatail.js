import React, { Component, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import moment from 'moment';
import {useGlobalContext} from '../Context/context.js'

import './Style.css'
function TaskDatail() {
  const [loading,setLoading] = useState(true)

  const {jwtToken} = useGlobalContext();


  const TodayDate = new Date()
  
  const [selectedDate, setselectedDate] = useState(TodayDate)

  useEffect( ()=> {
    const cookieValue = document.cookie
  .split('; ')
  .find((row) => row.startsWith('auth='))
  ?.split('=')[1];
    
    const headers = {
      'Authorization': `Bearer ${cookieValue}`
    };

   console.log('ok')
   
    const apiRequest = async () => {
      try{

        const response = await axios.get(`http://localhost:8080/task/bydate/${moment(selectedDate).format("DD-MMM-YY")}`, {headers})
        setdata(response.data)
        console.log(response)
        console.log('hello world')
        if(response.data) setLoading(false)
      }catch(e){
        console.log(e)
        console.log('ginvig error')
      }
    }  
  // useEffect( ()=> {
  //   const apiRequest = async () => {
  //     const response = await axios.get(`http://localhost:8080/task/currentdate`, {headers})
  //     setdata(response.data)
  //     console.log(response)
  //   }  


 apiRequest()  
  },[selectedDate])

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

if(loading) {
  <div>loading...</div>
}


  return (
    <>




      <div className="TakeDetail">
        <div className="tables">

          <div className="taskdetails_date">
            <label> Pick Date </label>
            <DatePicker
              selected={selectedDate}
              onChange={date => setselectedDate(date)}
              dateFormat='dd/MM/yyyy'
              showYearDropdown
              scrollableYearDropdown
            >

            </DatePicker>
          </div>

          <div className="Task_detail_table">
            <table>
              <thead>
              <tr>
                <th> No. </th>
                <th> Name </th>
                <th> Task </th>
               
              </tr>
              </thead>
              {
                data.map((val,index) => {
               
                  return <>
                    <tbody key={index}>
                      <tr key={index}>
                        <td> {index + 1} </td>
                        <td> {val[0]}  </td>
                        <td className='zero' style={{width:'60%'}} >
                          <>
                                <div className="Each_task">
                                  <h6> {val[1]}  </h6>
                                </div>
                              </>
                          
                        </td>
                        <td> {val[2]}  </td>
                      </tr>
                    </tbody>
                  </>
                })
              }
            </table>
          </div>
        </div>
      </div >
    </>
  )
}

export default TaskDatail


