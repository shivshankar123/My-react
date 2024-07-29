import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
