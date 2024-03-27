import React from "react";
import styles from "./style.module.css";

export const Spacer = ({ space = 10 }: { space?: number }) => (
  <div
    className={styles.spacer}
    style={{ paddingTop: `${space}px`, paddingBottom: `${space}px` }}
  >
    <hr />
  </div>
);
