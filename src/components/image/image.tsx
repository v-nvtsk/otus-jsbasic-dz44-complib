import React from "react";
import styles from "./image.module.css";

export const Image = ({
  url,
  width,
  height,
}: {
  url: string;
  width?: number;
  height?: number;
}) => {
  const wrapperStyle = {
    width,
    height,
  };

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <img src={url} className={styles.image} />
    </div>
  );
};
