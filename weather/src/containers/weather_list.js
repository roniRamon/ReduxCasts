import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends React.Component {

  renderWeather(cityDate) {
    const name = cityDate.city.name;
    const temps = cityDate.list.map(weather => weather.main.temp - 273.15);
    const pressure = cityDate.list.map(weather => weather.main.pressure );
    const humidity = cityDate.list.map(weather => weather.main.humidity );

    return (
      <tr key={name} >
        <td>{name}</td>
        <td><Chart data={temps} color="orange" units="C&deg;"/></td>
        <td><Chart data={pressure} color="red" units="hPa"/></td>
        <td><Chart data={humidity} color="blue" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C&deg;)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather,
});

export default connect(mapStateToProps)(WeatherList);
