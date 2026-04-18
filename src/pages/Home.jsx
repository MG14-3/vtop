import React from 'react'
import { useState } from "react";

import Header from "../components/Header";
import Student from "../components/Student";
import Alumni from "../components/Alumni";
import Employee from "../components/Employee";
import Parent from "../components/Parent";
import { InfoSection } from "../components/InfoSection";
import "../App.css";

function Home() {
  return (
    <>
    <div>
        <Header />
      </div>
      <div className="cards-container">
        <div>
          <Student />
        </div>
        <div>
          <Employee />
        </div>
        <div>
          <Parent />
        </div>
        <div>
          <Alumni />
        </div>
      </div>
      <div>
        <InfoSection />
      </div>
      <div className="footer-container">
        VTOP-Replica | Portfolio Project | Developed by: Mangalam | VIT-AP University
      </div>
    </>
  )
}

export default Home