import React from "react";
import styles from "./style.module.css";

export const Paragraph = ({ children }: { children: string }) => (
  <p className={styles.paragraph}>{children}</p>
);
