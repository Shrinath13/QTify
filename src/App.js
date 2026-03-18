import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx";

const dummyData = [
  { title: "New Bollywood", slug: "new-bollywood", songs: [{ artists: ["Arijit Singh"] }] },
  { title: "New English", slug: "new-english", songs: [{ artists: ["Taylor Swift"] }] }
];

function App() {
  return (
    <>
    <div>
      <Navbar searchData={dummyData} />
      <Hero />
    </div>
    </>
  );
}

export default App;
