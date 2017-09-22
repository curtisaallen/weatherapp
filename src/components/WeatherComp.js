import React, { Component } from 'react';
import Header from './Header';
import Temp from './Temp';
import Condition from './Condition';
import Forecast from './Forecast';
import { URL } from '../secrets';

class WeatherComp extends Component {
  constructor(props) {
      super(props);
      this.state = {
         city: '',
         region: '',
         temp: '',
         conditionTex: '',
         forecast: []
      };
  }    
  componentDidMount() {
      this.getWeather(URL);
  }  
  getWeather(url){
      fetch(url, {
          method: 'GET'
      }).then(response => response.json())
        .then((response) => {
            console.log(response);
            this.setState({
                city: response.query.results.channel.location.city,
                region: response.query.results.channel.location.region,
                temp: response.query.results.channel.item.condition.temp,
                conditionTex: response.query.results.channel.item.condition.text,
                forecast: response.query.results.channel.item.forecast
            });
      });  
  }  
  render() {
    return (
      <div id="container">
          <Header city={this.state.city} region={this.state.region} />
          <div className="tempcontainer">
             <Temp num={this.state.temp} />
             <Condition condition={this.state.conditionTex} />
             <div id="forecast">
                 <ul>
                    {this.state.forecast.slice(0, 5).map((item, index) => {
                        return <Forecast day={item.day} high={item.high} low={item.low} key={index} />;
                    })}                   
                 </ul>    
             </div>    
          </div>
      </div>
    );
  }
}

export default WeatherComp;