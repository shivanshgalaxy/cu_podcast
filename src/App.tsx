import React from "react";
import Hero from "./components/Hero.tsx";
import Header from "./components/Header.tsx";
import "./App.css"

const App: React.FC = () => {
  return (
      <>
        <Header />
        <main>
          <Hero />
        </main>
      </>
  );
};

export default App;
