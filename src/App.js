import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchFilters } from "./api/api";

// const dummyData = [
//   { title: "New Bollywood", slug: "new-bollywood", songs: [{ artists: ["Arijit Singh"] }] },
//   { title: "New English", slug: "new-english", songs: [{ artists: ["Taylor Swift"] }] }
// ];

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);

  const generateData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data);
  };

  const generateNewAlbumsData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumsData(data);
};

  const generateSongsData = async () => {
    const res = await fetchSongs();
    setSongsData(res);
  };

  const generateFilters = async () => {
    const res = await fetchFilters();
    setGenres([{ key: "all", label: "All" }, ...res.data]);
  };

  useEffect(() => {
    generateData();
    generateNewAlbumsData();
    generateSongsData();
    generateFilters();
  }, []);

  return (
    <>
    <div className="App">
      <Navbar />
      <Hero />
      <Section title="Top Albums" data={topAlbumsData} />
      <Section title="New Albums" data={newAlbumsData} />
      <hr className="line" />
      <Section 
        title="Songs" 
        data={songsData} 
        type="song" 
        filterSource={genres} 
      />
    </div>
    </>
  );
}

export default App;
