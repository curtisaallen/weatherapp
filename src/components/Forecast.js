import React from 'react';

const Forecast = ({day, high, low}) => (
<li>
    <div className="day">
        {day}
    </div>
    <div className="forecasttemp">
        {high} &#176; / {low} &#176;
    </div>
</li>
);

export default Forecast;