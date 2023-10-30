import React, { useState, useEffect } from "react";
import '../styles/univlist.css';
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
        const response = await fetch("http://localhost:5000/api/auth/univlist", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // Include cookies in the request
        });

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
    <div>
      <h1>University List</h1>
      <ul>
        {universities.map((university) => (
          <li key={university._id} className="university-item" onClick={() => handleNavigate(university._id)}>
            <div className="rectangle-box">
             <b>{university.name}</b> ,  Location:<b> {university.location}</b> , Establish year: <b>{university.estYear}</b>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UnivList;
