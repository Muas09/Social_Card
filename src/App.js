
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  const [showContainer, setShowContainer] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Router>
      <div className="App">
        {showContainer && (
          <div className="container">
            <div className="title">LIST SOCIAL CARD</div>
            <Navbar onSearchChange={setSearchTerm} />
          </div>
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Card
                setShowContainer={setShowContainer}
                searchTerm={searchTerm}
              />
            }
          />
          <Route path="/NotFound" element={<NotFound />} />
          <Route
            path="/Detail"
            element={<CardDetail setShowContainer={setShowContainer} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
