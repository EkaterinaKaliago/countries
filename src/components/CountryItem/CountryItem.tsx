import {Link} from "react-router-dom";
import React from "react";
import styles from "./CountryItem.module.css";
import Country from "../../interfaces/Country";
import InfoCardLineItem from "../InfoCardLineItem/InfoCardLineItem";

const CountryItem = (props: { country: Country }) =>
  <>
    <InfoCardLineItem title={props.country.name} value={<Link className={styles.link} to={'/info/' + props.country.name.toLowerCase()}>more info</Link>}/>
    <InfoCardLineItem title={'Capital'} value={props.country.capital}/>
    <InfoCardLineItem title={'Population'} value={props.country.population}/>
    <InfoCardLineItem title={'Language'} value={props.country.languages.map((language: any) => language.name).join(', ')}/>
    <InfoCardLineItem title={'Currency'} value={props.country.currencies.map((currency: any) => currency.name).join(', ')}/>
  </>;

export default CountryItem;
