import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Switch from "@mui/material/Switch";
import ControlledSwitches from "./components/Mode";

const App = () => {
  const [checked, setChecked] = React.useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <header className="sticky top-0 z-10 bg-white dark:bg-[#29292B]">
        <Navbar />
      </header>
      <div className="fixed bottom-5 dark:bg-white left-5 z-20 rounded-full bg-[#29292B]">
        {/* <button onClick={toggleDarkMode} className="p-3">
          hh
        </button> */}
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <main className="z-0 dark:bg-[#29292B]">
        <Carousel />
        <MainSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
