import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./styles.module.scss";
const Index = ({ children }) => {
  return (
    <div className={styles.__container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Index;
