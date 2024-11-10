import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./resultsPage.css";

function ResultsPage() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/");
        return;
      }
      try {
        const response = await axios.get("http://localhost:8000/api/myResult", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching results", error);
      }
    };
    fetchData();
  }, [navigate]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="data-container">
      <aside>
        {" "}
        <h2>{data.name}</h2>
        <h3>{data.RollNumber}</h3>
      </aside>
      <div className="tables">
        {data.semesters.map((semester, index) => (
          <div key={index}>
            <h3>Semester {index + 1}</h3>
            <table className="tableclass">
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {semester.subjects.map((subject, idx) => (
                  <tr key={idx}>
                    <td>{subject.subjectCode}</td>
                    <td>{subject.score}</td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <strong>Credits</strong>
                  </td>
                  <td>{semester.credits}</td>
                </tr>
                <tr>
                  <td>
                    <strong>SGPA</strong>
                  </td>
                  <td>{semester.sgpa}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultsPage;
