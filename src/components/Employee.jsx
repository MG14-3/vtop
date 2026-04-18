import React from 'react'
import EmployeeLogo from '../assets/employee.png'
import { FaArrowRightToBracket } from "react-icons/fa6";
import '../styles/Employee.css'

function Employee() {
  return (
        <div className="EmployeeCard">
          <div className="leftSection">
            <img src={EmployeeLogo} alt="Employee" className="icon" />
          </div>
          
          <div className="rightSection">
            <h2 className="label">Employee</h2>
            <button className="EmployeeButton" aria-label="Login">
              <span className="arrowIcon"><FaArrowRightToBracket /></span>
            </button>
          </div>
        </div>
  )
}

export default Employee