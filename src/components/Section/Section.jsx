import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters"; 

const Section = ({ title, data, type, filterSource }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const cardsToRender = data.filter((item) => {
    if (type === "album" || selectedFilterIndex === 0) return true;
    
    if (filterSource && filterSource[selectedFilterIndex]) {
      const currentFilterLabel = filterSource[selectedFilterIndex].label;
      return item.genre.label === currentFilterLabel;
    }
    return true;
  });

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {type === "album" && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {!carouselToggle ? "Collapse" : "Show All"}
          </h4>
        )}
      </div>

      {type === "song" && (
        <Filters 
          filters={filterSource} 
          selectedFilterIndex={selectedFilterIndex} 
          setSelectedFilterIndex={setSelectedFilterIndex} 
        />
      )}

      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {cardsToRender.map((item) => (
                <Card data={item} type={type} key={item.id} />
              ))}
            </div>
          ) : (
            <Carousel 
              data={cardsToRender} 
              renderComponent={(item) => <Card data={item} type={type} />} 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;