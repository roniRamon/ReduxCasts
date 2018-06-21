import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault();
    //get weather data when form submit !!!
    this.props.fetchWeather(this.state.term);
    this.setState({term: ""});
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

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: city => dispatch(fetchWeather(city)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
