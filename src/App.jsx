import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ResultsPage from "./components/ResultsPage";
import Header from "./components/Header";
import "./App.css";
function App() {
  return (
    <div className="container-bg">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/myResult" element={<ResultsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
