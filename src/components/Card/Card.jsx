import React from "react";
import styles from "./Card.module.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={data.image} alt="album" loading="lazy" />
        <div className={styles.banner}>
          <Chip
            label={`${data.follows} Follows`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{data.title}</p>
      </div>
    </div>
  );
}

export default Card;