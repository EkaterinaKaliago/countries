import React, {Component} from "react";
import Country from "../../interfaces/Country";
import styles from "../CountryInfo/CountryInfo.module.css";
import CountryInfo from "../CountryInfo/CountryInfo";
import countriesApi from "../../services/countriesApi";

type State = {
  country: Country | null,
  warningMessage: string | null,
};

class CountryInfoPage extends Component<any, State> {

  state: State = {
    country: null,
    warningMessage: null,
  };

  componentDidMount = async () => {
    const countryName = this.props.match.params.countryName;

    const response = await countriesApi.getByName(countryName);

    if (response.status === 200) {
      const foundedCountries = await response.json();

      const country = foundedCountries.pop();

      this.setState({country: country});
    } else {
      console.log('error');

      this.setState({warningMessage: 'Not found'});
      return;
    }
  };

  render() {

    if (this.state.warningMessage) {
      return <h1>{this.state.warningMessage}</h1>;
    }

    if (this.state.country == null) {
      return <h1>Loading...</h1>;
    }

    return (
      <main className={styles.main}>
        <CountryInfo country={this.state.country} />
      </main>
    );
  }
}

export default CountryInfoPage;