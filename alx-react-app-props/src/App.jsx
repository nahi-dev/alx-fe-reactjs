import ProfilePage from "./components/ProfilePage";
import UserContext from "./UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="John Doe" age={30} bio="Loves exploring new cities." />
      <Footer />
      <div>
        <h1 style={{ textAlign: "center" }}>Simple Counter App</h1>
        <Counter />
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
      </div>
    </>
  );
}

export default App;
