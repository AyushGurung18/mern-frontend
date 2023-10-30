import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import bgimage from "../assets/bg.webp";

function Home() {
  const [username, setUserName] = useState(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/home", {
          method: "GET",
          credentials: "include", // Send cookies with the request
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else if (response.status === 401) {
          navigate("/signin");
        } else {
          throw new Error("Error fetching data");
        }
      } catch (error) {
        console.error("Error:", error);
        navigate("/signin");
      }
    };

    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/user-info",
          { credentials: "include" }
        );
        if (response.ok) {
          const data = await response.json();
          setUserName(data.username);
        } else {
          throw new Error("Error fetching user information");
        }
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    fetchData();
    fetchUserInfo();
  }, [navigate]);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search-results?query=${query}`);
    }
  };

  function univList() {
    navigate("/univlist");
  }

  return (
    <div>
      <div className="nava">
        <span className="nav-header">SearchurCollege</span>
      </div>
      <div className="img-container">
        <img alt="" src={bgimage} />
        <div className="main-title">
          <h1>Search Your Dream College {username}</h1>
        </div>
        <div className="searchbar">
          <input
            className="input-search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search universities..."
          />
          <button className="button" onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-1">
            <h1>Select Your Study Goal</h1>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
            <div className="box" onClick={univList}>
              <div className="box-head">Engineering</div> <br />{" "}
              <div className="boxs-details">
                BE./B.tech
                <hr />
              </div>
              <div className="boxs-details">
                Diploma in Engineering
                <hr />
              </div>
              <div className="boxs-details">ME/M.Tech</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="box" onClick={univList}>
              <div className="box-head">Management</div> <br />
              <div className="boxs-details">
                MBA/PGDM
                <hr />
              </div>
              <div className="boxs-details">
                BBA/BBM
                <hr />
              </div>
              <div className="boxs-details">Executive MBA</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="box" onClick={univList}>
              <div className="box-head"> Medical</div> <br />
              <div className="boxs-details">
                MBBS
                <hr />
              </div>
              <div className="boxs-details">
                PG Medical
                <hr />
              </div>
              <div className="boxs-details">Philosphy of Medical</div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="box" onClick={univList}>
              <div className="box-head">Design</div> <br />{" "}
              <div className="boxs-details">
                B. Des
                <hr />
              </div>
              <div className="boxs-details">
                B. Des
                <hr />
              </div>
              <div className="boxs-details">BA</div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default Home;
