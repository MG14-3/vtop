import React from "react"; 
import {
  FaGraduationCap, FaBriefcase, FaCircleInfo, FaPaw,
  FaBuildingColumns, FaRegPaperPlane, FaHouseChimney,
  FaTrophy, FaUser,
} from "react-icons/fa6";
import { FaBook, FaRegMoneyBillAlt, FaRegDotCircle } from "react-icons/fa";
import { BsShieldShaded } from "react-icons/bs";
import "../styles/Dashboard.css";
import vtopLogo from "../assets/vtop-logo-black.png";

const Dashboard = ({ student, onLogout }) => {
  // Safety check: if no student is passed, don't render anything
  if (!student) return null;

  const menuItems = [
    { title: "My Info", icon: <FaBriefcase /> },
    { title: "Info Corner", icon: <FaCircleInfo /> },
    { title: "Mentor", icon: <FaPaw /> },
    { title: "Course Enrollment", icon: <FaBook /> },
    { title: "Academics", icon: <FaGraduationCap /> },
    { title: "Research", icon: <FaBuildingColumns /> },
    { title: "Examination", icon: <FaBook /> },
    { title: "Library", icon: <FaBuildingColumns /> },
    { title: "Services", icon: <FaRegPaperPlane /> },
    { title: "Bonafide & Demand Letter", icon: <FaBuildingColumns /> },
    { title: "Online Payments", icon: <FaRegMoneyBillAlt /> },
    { title: "Hostel", icon: <FaHouseChimney /> },
    { title: "Feedback", icon: <FaRegDotCircle /> },
    { title: "ASC FDP", icon: <FaBook /> },
    { title: "Events", icon: <BsShieldShaded /> },
    { title: "SW Events", icon: <FaTrophy /> },
    { title: "My Account", icon: <FaUser /> },
  ];

  return (
    <>
      <div className="dashboard-container">
        <header className="vtop-header">
            <div className="header-left">
              <img src={vtopLogo} alt="VIT-AP" className="header-logo" />
            </div>
            <div className="header-right" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span className="user-id">
                {student.studentId}
              </span>
              <div className="user-avatar" style={{ cursor: 'pointer' }}>
                <FaUser />
              </div>
            </div>

        </header>

        <section className="spotlight-section">
          <div className="spotlight-bar">
            <div className="spotlight-tag">Spotlight</div>
            <div className="spotlight-track">
              <div className="spotlight-item">
                <span className="coe-badge">
                  COE 1<span className="notif">1</span>
                </span>
                <a href="#">
                  Student Online Quiz URL 1 / Online Assessment Link 1
                </a>
              </div>
            </div>
          </div>
        </section>

        <main className="dashboard-content">
          <h2 className="section-title">
            {student.name}'s Dashboard
          </h2>
          
          <div className="menu-list-layout">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-row-card">
                <div className="row-icon">{item.icon}</div>
                <span className="row-title">{item.title}</span>
                <div className="row-arrow">→</div>
              </div>
            ))}
          </div>
        </main>
      </div>
      
      <div className="footer-container">
        VTOP-Replica | Portfolio Project | Developed by: Mangalam | VIT-AP University
      </div>
    </>
  );
};

export default Dashboard;