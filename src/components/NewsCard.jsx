import React from "react";
import "../styles/InfoSection.css";

export const NewsCard = () => {
  const newsItems = [
    "VIT-AP University: Ranked No. #1 in Emerging Private Universities in India (Outlook University Rankings-2022, 2023 & 2024)",
    "VIT-AP University recognized for its excellence in providing Outcome Based Education (OBE) and Ranked in the Diamond Band (A+) Category in the OBE-2023 R-World Institutional Ranking (WIR)",
    "VIT-AP University has been recognized as the Host Institute (HI) for the implementation of the Innovation and Incubation Schemes under the Ministry of Micro, Small & Medium Enterprises (MSME), Government of India.",
    "VIT-AP TBI Foundation (VTBIF) has been successfully incorporated as a Section-8 Company, with the Ministry of Corporate Affairs (MCA), Government of India.",
    "VIT-AP University faculty members are in the world's Top 2% Scientists list in the year 2022 as per the survey conducted by Stanford University and Elsevier.",
  ];

  return (
    <div className="info-box news-box">
      <div className="box-header">
        Vellore Institute of Technology- Andhra Pradesh (VIT-AP University),
        India
      </div>
      <div className="box-content">
        {newsItems.map((item, index) => (
          <div key={index} className="list-item">
            <span className="shield-icon">🛡️</span>
            <p className="item-text">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
