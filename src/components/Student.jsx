import React from 'react'
import StudentLogo from '../assets/student.png'
import { useNavigate } from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";
import '../styles/Student.css'

function Student() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };


  return (
    <div className="StudentCard">
      <div className="leftSection">
        <img src={StudentLogo} alt="Student" className="icon" />
      </div>
      
      <div className="rightSection">
        <h2 className="label">Student</h2>
        <button className="StudentButton" aria-label="Login" onClick={() => navigate('/login')}>
          <span className="arrowIcon"><FaArrowRightToBracket /></span>
        </button>
      </div>
    </div>
  )
}

export default Student
