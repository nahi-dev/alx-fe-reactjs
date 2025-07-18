import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import React from "react";
function App() {
  return (
    <>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
