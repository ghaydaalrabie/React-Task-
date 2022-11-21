import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard'

class App extends React.Component {

    
  state = { weatherResult: null };

  // React Async is a promise-based library that offers a declarative API to make API calls.

//value what i write 
  onSearchSubmit = async (searchInputValue) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=ca261c971d5638db9d4d6cbccc1f093d`
    );
        console.log(response.data);

    this.setState({ weatherResult: response.data });
  };

  render() {
    return (
      <div className="container my-5">
        <h1 style={{ color: "black" }} className="text-center title">
          Weather in
        </h1>
        <CitySearch onSearchSubmit={this.onSearchSubmit} />
        {/* if there are result from api show the card */}
        {this.state.weatherResult ? (
          <WeatherCard weatherResult={this.state.weatherResult} />
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;