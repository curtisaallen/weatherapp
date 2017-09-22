import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherComp from './components/WeatherComp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WeatherComp />, document.getElementById('root'));
registerServiceWorker();
