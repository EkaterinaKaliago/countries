import React from "react";
import styles from "./InfoCardLineItem.module.css";

type InfoItemProps = {
  title: string,
  value: any,
}

const InfoCardLineItem = (props: InfoItemProps) => <div className={styles.countryInfoFlex}>
  <p className={styles.countryInfoText}>{props.title}</p>
  <p className={styles.countryInfoDesc}>{props.value}</p>
</div>;

export default InfoCardLineItem;