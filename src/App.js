import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';
import "./App.css";
import WaitersModule from "./modules/waiters/WaitersModule";

export default function App() {
  return (
    <Container maxWidth="sm">
      <h1 className="App__title">Restaurant App</h1>
      <Router>
        <Routes>
          <Route path="/*" element={<WaitersModule />} />
        </Routes>
      </Router>
    </Container>
  );
}
