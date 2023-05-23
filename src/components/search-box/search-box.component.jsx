import { Component } from "react";
import "./search-box.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="search"
        placeholder={this.props.placeholder} // any name could be given to props
        className={`search-box ${this.props.className}`}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}
export default SearchBox;
