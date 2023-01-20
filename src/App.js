// import logo from "./logo.svg";
// import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const Apply = React.lazy(() => import("./pages/apply/Apply"));

  const renderLoader = () => <p>Loading</p>;

  return (
    <Router>
      <Suspense fallback={renderLoader()}>
        <Routes>
          <Route path="/" element={<Apply />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
