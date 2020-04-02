import React from "react";
import styles from "./CountryList.module.css";
import CountryItem from "../CountryItem/CountryItem";
import Country from "../../interfaces/Country";

const CountryList = (props: any) => props.countries.map((country: Country, index: number) =>
  <div key={index} className={styles.countryWrap}>
    <CountryItem country={country} />
  </div>
);

export default CountryList;