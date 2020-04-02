import React, {Component} from "react";
import countriesApi from "../../services/countriesApi";
import CountryList from "../../components/CountryList/CountryList";
import SearchInput from "../../components/SearchInput/SearchInput";
import Country from "../../interfaces/Country";
import styles from "./HomePage.module.css";

type State = {
  countries: Country[],
  searchText: string,
};

class HomePage extends Component<{}, State> {

  state: State = {
    countries: [],
    searchText: '',
  };

  onChanged = async (e: any) => {
    this.setState({searchText: e.target.value});

    if (e.target.value.length < 2) {
      this.setState({countries: []});
      return;
    }
    const response = await countriesApi.getByName(this.state.searchText);
    if (response.status === 200) {
      const countriesData = await response.json();
      console.log(countriesData);
      this.setState({countries: countriesData});
    } else {
      console.log('error');
    }
  };

  render() {
    return (
      <main className={styles.main}>
        <h1 className={styles.title}>Search for a country</h1>
        <SearchInput value={this.state.searchText} onChanged={this.onChanged} />
        <div className={styles.countries}>
          <CountryList countries={this.state.countries} />
        </div>
      </main>
    );
  }
}

export default HomePage;