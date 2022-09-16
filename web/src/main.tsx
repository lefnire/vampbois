import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article"
import AppBar from './components/AppBar'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const myLinks = [
    {href: "http://vampire.com", text: "vampire site"}
  ]

  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="article/:id" element={<Article />} />*/}
        {/*<Route path="*" element={<Navigate to="/" />} />*/}
      </Routes>
    </BrowserRouter>
  );
}
