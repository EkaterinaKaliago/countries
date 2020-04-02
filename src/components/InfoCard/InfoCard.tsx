import React from "react";
import styles from "./InfoCard.module.css";

const InfoCard = (props: { title: string, children: any[] }) =>
  <div className={styles.countryInfoWrap}>
    <p className={styles.countryInfoTitle}>{props.title}</p>
    {props.children}
  </div>;

export default InfoCard;