import React, {Component} from "react";
import Country from "../../interfaces/Country";
import styles from "./SearchInput.module.css"

type State = {
  searchText: string,
  countries: Country[],
};

type Props = {
  onChanged: (e: any) => void,
  value: string
}

class SearchInput extends Component<Props, State> {

  render() {
    return (
      <input className={styles.searchInput}
        type='text'
        name="country"
        placeholder="Enter country name"
        value={this.props.value}
        onChange={this.props.onChanged}
        autoComplete="off"
      />
    );
  }
}

export default SearchInput;
