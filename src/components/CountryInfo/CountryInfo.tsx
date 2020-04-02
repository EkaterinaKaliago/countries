import React, {Component} from "react";
import styles from "./CountryInfo.module.css";
import Country from "../../interfaces/Country";
import {Link} from "react-router-dom";
import InfoCard from "../InfoCard/InfoCard";
import InfoCardLineItem from "../InfoCardLineItem/InfoCardLineItem";
import {ReactComponent as ArrowBack} from "../../icons/arrow_back.svg";
import {YMaps, Map, Circle} from "react-yandex-maps";

type CountryInfoProps = {
  country: Country
};

class CountryInfo extends Component <CountryInfoProps> {

  render() {
    return (
      <div className={styles.countryInfo}>
        <Link className={styles.link} to={'/'}>
          <ArrowBack />
          back
        </Link>
        <p className={styles.countryInfoTitle}>{this.props.country.name}</p>
        <div className={styles.flexWrap}>
          <div className={styles.flexColumn}>
            <InfoCard title={'General info'}>
              <InfoCardLineItem title={'Capital'} value={this.props.country.capital} />
              <InfoCardLineItem title={'Population'} value={this.props.country.population} />
              <InfoCardLineItem title={'Language'}
                value={this.props.country.languages.map((language: any) => language.name).join(', ')} />
              <InfoCardLineItem title={'Currency'}
                value={this.props.country.currencies.map((currency: any) => currency.name).join(', ')} />
            </InfoCard>
            <InfoCard title={'Geography'}>
              <InfoCardLineItem title={'Region'} value={this.props.country.region} />
              <InfoCardLineItem title={'Subregion'} value={this.props.country.subregion} />
              <InfoCardLineItem title={'Lat/Lng'} value={this.props.country.latlng.join('/')} />
              <InfoCardLineItem title={'Area'} value={this.props.country.area} />
            </InfoCard>
            <InfoCard title={'Other info'}>
              <InfoCardLineItem title={'International calling code'} value={this.props.country.callingCodes} />
              <InfoCardLineItem title={'Timezone'} value={this.props.country.timezones.join(', ')} />
              <InfoCardLineItem title={'Land borders'}
                value={this.props.country.languages.map((language: any) => language.name).join(', ')} />
              <InfoCardLineItem title={'Top level domain'} value={this.props.country.topLevelDomain} />
            </InfoCard>
          </div>
          <div className={styles.flexColumn}>
            <img src={this.props.country.flag} alt={this.props.country.name} className={styles.countryInfoFlag} />
            <YMaps query={{lang:'en_US', apikey:'f12bd89d-4cc6-4dbe-964a-2f3e4d446d2a'}}>
              <div>
                <Map
                  state={{center: [this.props.country.latlng[0], this.props.country.latlng[1]], zoom: 4}}
                  width='400px'>
                  <Circle
                    geometry={[[this.props.country.latlng[0], this.props.country.latlng[1]], this.props.country.area]}
                    options={{
                      draggable: false,
                      fillColor: 'rgba(156,156,156,0.47)',
                      strokeColor: '#787878',
                      strokeOpacity: 0.8,
                      strokeWidth: 3,
                    }}
                  />
                </Map>
              </div>
            </YMaps>
          </div>
        </div>
      </div>
    )
  }
}

export default CountryInfo;