"use client";

import { useEffect } from "react";
import styles from "./loader.module.css";

const Loader = () => {
  useEffect(() => {
    // Когда страница загружена, вешаем класс "loaded"
    const handleLoad = () => {
      document.body.classList.add("loaded");
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className={styles["loader-wrapper"]}>
      <span className={styles.loader}></span>
      <div className={`${styles["loder-section"]} ${styles["left-section"]}`}></div>
      <div className={`${styles["loder-section"]} ${styles["right-section"]}`}></div>
    </div>
  );
};

export default Loader;
