import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Logic from "./pages/Logic";
import About from "./pages/About";

function App() {
  const [page, setPage] = useState("home");

  function navigate(to) {
    setPage(to);
  }

  return (
    <div className="app-wrapper">
    <div className="side-spoon" />
    <div className="bg-decor"/>
    <div className="bg-right" />
      <Header navigate={navigate} />

      {page === "home" && <Home navigate={navigate} />}
      {page === "logic" && (
        <div className="page-container">
          <Logic />
        </div>
      )}
      {page === "about" && <About />}

      <Footer />
    </div>
  );
}

export default App;