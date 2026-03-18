import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchFilters } from "./api/api";
import "./App.css";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [genres, setGenres] = useState([{ key: "all", label: "All" }]);

  const generateData = async () => {
    const data = await fetchTopAlbums();
    setTopAlbumsData(data || []);
  };

  const generateNewAlbumsData = async () => {
    const data = await fetchNewAlbums();
    setNewAlbumsData(data || []);
  };

  const generateSongsData = async () => {
    const res = await fetchSongs();
    setSongsData(res || []);
  };

  const generateFilters = async () => {
    const res = await fetchFilters();
    if (res && res.data) {
      setGenres([{ key: "all", label: "All" }, ...res.data]);
    }
  };

  useEffect(() => {
    generateData();
    generateNewAlbumsData();
    generateSongsData();
    generateFilters();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="sectionWrapper"> {/* Helpful to wrap sections for layout */}
        <Section title="Top Albums" data={topAlbumsData} type="album" />
        <Section title="New Albums" data={newAlbumsData} type="album" />
        <hr className="line" />
        <Section 
          title="Songs" 
          data={songsData} 
          type="song" 
          filterSource={genres} 
        />
      </div>
    </div>
  );
}

export default App;