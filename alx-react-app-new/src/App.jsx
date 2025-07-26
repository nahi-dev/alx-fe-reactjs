import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="John Doe" age={30} bio="Loves exploring new cities." />
      <Footer />
      <div>
        <h1 style={{ textAlign: "center" }}>Simple Counter App</h1> 
        <Counter />
      </div>
    </>
  );
}

export default App;
