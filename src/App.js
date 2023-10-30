import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Signup from "./pages/singup";
import Home from "./pages/home";
import CollegeAdd from "./pages/collegeadd";
import UnivList from "./pages/univlists";
import UniversityDetail from "./pages/univdetail";
import SearchResults from "./pages/searchresults";
import MockTest from "./pages/mockpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CollegeAdd" element={<CollegeAdd />} />
        <Route path="/home" element={<Home />} />
        <Route path="/univlist" element={<UnivList />} />
        <Route path="/university/:id" element={<UniversityDetail />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/mocktest" element={<MockTest />} />
      </Routes>
    </Router>
  );
}

export default App;
