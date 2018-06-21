import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    //get weather data when form submit !!!
    
  }

  render() {
    return (
        <div>
          <form className="input-group" onSubmit={this.onFormSubmit}>
            <input
              onChange={this.onInputChange.bind(this)}
              value={this.state.term}
              className="form-control"
              placeholder="Get a five-day forecast in your favorite cities"
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
          </form>
        </div>
    );
  }

}

export default SearchBar;
