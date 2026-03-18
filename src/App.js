import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbums } from "./api/api";

const dummyData = [
  { title: "New Bollywood", slug: "new-bollywood", songs: [{ artists: ["Arijit Singh"] }] },
  { title: "New English", slug: "new-english", songs: [{ artists: ["Taylor Swift"] }] }
];

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);

  const generateData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <>
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topAlbumsData} />
    </div>
    </>
  );
}

export default App;
