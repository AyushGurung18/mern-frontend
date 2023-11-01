import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Access the query parameter using URLSearchParams
  const searchQuery = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/colleges/search?query=${searchQuery}`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (searchQuery) {
      fetchResults();
    } else {
      // If no search query is provided, navigate back to the home page or handle it in your app logic
      navigate("/");
    }
  }, [searchQuery, navigate]);

  const handleNavigate = (id) => {
    navigate(`/university/${id}`);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h2 style={{margin:'40px'}}>Search Results for: {searchQuery}</h2>
          <ul>
            {results.map((result) => (
              <li
                key={result._id}
                className="university-item"
                onClick={() => handleNavigate(result._id)}
              >
                <div className="rectangle-box">
                  <b>
                    <span style={{ color: "blue" }}>{result.name}</span>
                  </b>
                  <button style={{ float: "right" }} className="button">
                    Brochure
                  </button>{" "}
                  <br /> Location:<b> {result.location}</b> <br /> Establish
                  year: <b>{result.estYear}</b>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default SearchResults;
