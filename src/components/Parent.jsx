import React from 'react'
import ParentLogo from '../assets/parent.png' 
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import '../styles/Parent.css'

function Parent() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/parent-login');
  };

  return (
        <div className="ParentCard">
          <div className="leftSection">
            <img src={ParentLogo} alt="Parent" className="icon" />
          </div>
          
          <div className="rightSection">
            <h2 className="label">Parent</h2>
            <button className="ParentButton" aria-label="Login" onClick={() => navigate('/parent-login')}>
              <span className="arrowIcon"><FaArrowRightToBracket /></span>
            </button>
          </div>
        </div>
  )
}

export default Parent