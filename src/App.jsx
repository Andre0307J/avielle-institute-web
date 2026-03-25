import React from "react";
import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Home />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
