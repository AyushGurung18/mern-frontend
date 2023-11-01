import React, { useState, useEffect } from "react";
import "../styles/univlist.css";
import { useNavigate } from "react-router-dom";

function UnivList() {
  const [universities, setUniversities] = useState([]);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/university/${id}`);
  };

  useEffect(() => {
    // Define a function to fetch the data
    const fetchUniversities = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/univlist",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // Include cookies in the request
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setUniversities(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // Call the fetch function
    fetchUniversities();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h1 style={{margin:'45px'}}>University List</h1>

          <ul>
            {universities.map((university) => (
              <li
                key={university._id}
                className="university-item"
                onClick={() => handleNavigate(university._id)}
              >
                <div className="rectangle-box">
                  <b>
                    <span style={{ color: "blue" }}>{university.name}</span>
                  </b>{" "}
                  <button style={{float:'right'}} className="button">Brochure</button>
                  <br /> Location:<b> {university.location}</b> <br /> Establish
                  year: <b>{university.estYear}</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default UnivList;
