import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <header className="sticky top-0 z-10 bg-white">
        <Navbar />
      </header>
      <main className="z-0">
        <Carousel />
        <MainSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
