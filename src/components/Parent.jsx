import React from 'react'
import ParentLogo from '../assets/parent.png' 
import { FaArrowRightToBracket } from "react-icons/fa6";
import '../styles/Parent.css'

function Parent() {

  return (
        <div className="ParentCard">
          <div className="leftSection">
            <img src={ParentLogo} alt="Parent" className="icon" />
          </div>
          
          <div className="rightSection">
            <h2 className="label">Parent</h2>
            <button className="ParentButton" aria-label="Login">
              <span className="arrowIcon"><FaArrowRightToBracket /></span>
            </button>
          </div>
        </div>
  )
}

export default Parent