import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="John Doe" age={30} bio="Loves exploring new cities." />
      <Footer />
    </>
  );
}

export default App;
