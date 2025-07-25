import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import React from "react";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  );
}

export default App;
