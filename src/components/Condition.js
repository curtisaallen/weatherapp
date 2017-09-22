import React, { Component } from 'react';

class Condition extends Component {
  icons(val) {
    let iconval = val.toLowerCase();
    let style;
    switch (iconval) {
        case "tornado":
            style = 'wi wi-night-sleet';
            break;
        case "partly cloudy":
            style ='wi wi-day-cloudy';
            break;
        case "sunny":
            style ='wi wi-day-sunny';
            break;
        case "showers":
            style ='wi wi-day-rain-mix';
            break;
        case "hot":
            style ='wi wi-hot';
            break;
        default:
            style ='wi wi-day-rain-mix';
    }
   return style;     
  }  
  render() {
    return (
      <div id="condition">
         <i className={this.icons(this.props.condition)}></i>
         {this.props.condition}
      </div>
    );
  }
}

export default Condition;