import React from "react";
import LoginPage from "./components/Login"; /*Login page imported on app.js*/
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateOutlet from "./components/PrivateOutlet";
import Participants from "./components/Participants";
import Visitor from "./components/Visitor";
import Verfication from "./components/Varification";
import Admin from "./components/Admin";
import "./components/Styles/Global.css"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Participants" element={<Participants />} />
          <Route path="Visitors" element={<Visitor />} />
          <Route path="Verification" element={<Verfication />} />
          <Route path="Admins" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
