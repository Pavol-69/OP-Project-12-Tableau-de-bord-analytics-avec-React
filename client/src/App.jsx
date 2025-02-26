import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Error404 from "./pages/Error404";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/user_page/12" replace />} />
          <Route path="/user_page/:user_id" element={<Homepage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
