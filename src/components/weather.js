import React from "react";
import "../style/weather.css";
import moment from "moment-timezone";



const Weather = (props) => {
  var M = moment.unix(props.sunset).tz("Asia/Kolkata").format("HH:mm:ss");
  var N = moment.unix(props.sunrise).tz("Asia/Kolkata").format("HH:mm:ss");

  return (
    <div className="container text-light">
      <div className="row">
        <div className="col-6">
          <h1>{props.city}</h1>
          <h1>{moment().format("DD-MM-YYYY")}</h1>
          <h5 className="py-4">
            <i className={`wi ${props.weatherIcon} display-1`}></i>
          </h5>
          {props.temp_celsius ? (
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
          ) : null}

        </div>
        <div className="col-6">
            {maxminTemp(props.temp_min, props.temp_max)}
            <h4 className="py-3">
              Description:-
          {props.description.charAt(0).toUpperCase() +
                props.description.slice(1)}
            </h4>
            <h4 className="px-4">Sunrise:- {N}</h4>
            <h4 className="px-4">Sunset:- {M}</h4>
            <h4 className="px-4">Wind:- {props.wind}mph</h4>
        </div>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">Min Temp:-{min}&deg;</span>
        <span className="px-4">Max Temp:-{max}&deg;</span>
      </h3>
    );
  }
}
