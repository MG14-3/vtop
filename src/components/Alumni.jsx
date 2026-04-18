import React from 'react'
import AlumniLogo from '../assets/alumni.png'
import { FaArrowRightToBracket } from "react-icons/fa6";
import '../styles/Alumni.css'

function Alumni() {
  return (
    <div className="AlumniCard">
      <div className="leftSection">
        <img src={AlumniLogo} alt="Alumni" className="icon" />
      </div>
      
      <div className="rightSection">
        <h2 className="label">Alumni</h2>
        <button className="AlumniButton" aria-label="Login">
          <span className="arrowIcon"><FaArrowRightToBracket /></span>
        </button>
      </div>
    </div>
  )
}

export default Alumni