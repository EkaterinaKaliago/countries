import React, {Component} from "react";
import countriesApi from "../../services/countriesApi";
import CountryList from "../../components/CountryList/CountryList";
import SearchInput from "../../components/SearchInput/SearchInput";
import Country from "../../interfaces/Country";
import styles from "./HomePage.module.css";

type State = {
  countries: Country[],
  searchText: string,
  currentPage: number,
};

class HomePage extends Component<{}, State> {

  state: State = {
    countries: [],
    searchText: '',
    currentPage: 1,
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

  onPrev = () => {
    this.setState({currentPage: this.state.currentPage - 1});
  };

  onNext = () => {
    this.setState({currentPage: this.state.currentPage + 1});
  };

  changePage = (number: any) => {
    this.setState({currentPage: number});
  };

  render() {

    const countriesPerPage = 6;
    const startIndex = countriesPerPage * this.state.currentPage - 1;
    const endIndex = startIndex + countriesPerPage;
    const currentCounties = this.state.countries.slice(startIndex + 1, endIndex + 1);
    const totalNumPages = this.state.countries.length / 6;
    const navLinks = [];

    for (let i = 1; i <= totalNumPages; i++) {

      if (i > 1 && i < this.state.currentPage - 2) {
        if (i === 2) {
          navLinks.push(
            <span key={i}>
              ...
            </span>
          );
        }
        continue;
      }

      if (i < totalNumPages - 1 && i > this.state.currentPage + 2) {
        if (totalNumPages - 2 < i) {
          navLinks.push(
            <span key={i}>
              ...
            </span>
          );
        }
        continue;
      }

      navLinks.push(
        <button key={i}
          type="button"
          onClick={() => this.changePage(i)}
          className={`${styles.paginationNum} ${i === this.state.currentPage ? styles.active : ''}`}>
          {i}
        </button>
      );
    }

    return (
      <main className={styles.main}>
        <h1 className={styles.title}>Search for a country</h1>
        <SearchInput value={this.state.searchText} onChanged={this.onChanged} />
        <div className={styles.countries}>
          {this.state.countries.length > 6 ? <div className={styles.pagination}>
            <button type="button"
              className={styles.btn}
              disabled={this.state.currentPage - 1 <= 0} onClick={this.onPrev}>
              prev
            </button>
            <div className={styles.paginationNumWrap}>
              {navLinks}
            </div>
            <button type="button"
              className={styles.btn}
              disabled={this.state.currentPage + 1 >= totalNumPages}
              onClick={this.onNext}>
              next
            </button>
          </div> : ''}
          <CountryList countries={currentCounties} />
        </div>
      </main>
    );
  }
}

export default HomePage;