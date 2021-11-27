import axios from "axios";

export default {
  // Gets city current conditions
  getCurrentConditions: function(city) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=9ff2356a02ea9802929dcef5b6128c26"
    );
  },
  //get 5 days forecast
  getForecast: function(city) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=imperial&appid=9ff2356a02ea9802929dcef5b6128c26"
    );
  },
  //api to get uv index
  getUvindex: function(lat, lon) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/uvi?lat=" +
        lat +
        "&lon=" +
        lon +
        "&appid=9ff2356a02ea9802929dcef5b6128c26"
    );
  },
  //get longitude and latitude
  getGeolocation: function(lat, lon) {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=imperial&appid=9ff2356a02ea9802929dcef5b6128c26"
    );
  }
};
