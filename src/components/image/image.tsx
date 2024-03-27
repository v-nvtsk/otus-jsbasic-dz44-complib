import React from "react";
import styles from "./image.module.css";

export const Image = ({
  url,
  alt,
  width,
  height,
}: {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}) => {
  const wrapperStyle = {
    width,
    height,
  };

  return (
    <div className={styles.wrapper} style={wrapperStyle}>
      <img src={url} className={styles.image} alt={alt} />
    </div>
  );
};
