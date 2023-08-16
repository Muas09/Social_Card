import React, { useState } from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import "./App.css";
import Model_Component from "./components/Model_Component/index";
import Detail_Component from "components/Detail_Component";
// import User_Component from "components/User_Component";
// import SearchAdd_Comonent from "components/SearchAdd_Component";
function App() {
  const [searchData, setSearchData] = useState(""); // State stores the search data

  const handleSearch = (searchTerm) => {
    setSearchData(searchTerm);
  };

  return (
    <Router>
      <div>
        <div className="Container">
          <div className="Title">LIST SOCIAL CARD</div>
          <Routes>
          <Route path="/Index" element={<SearchAdd_Comonent />}/>
          <Route path="/" element={<User_Component/>} />
          <Route path="/settings" element={<Detail_Component />} />
          <Route path="/settings" element={<Model_Component />} />
          <Route path="*" element={<SearchAdd_Comonent/>} />
      </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
