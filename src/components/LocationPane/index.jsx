import React from 'react';
import './index.scss';

const DayTab = ({ day: { day, summary, minTemp, maxTemp } }) => {
  return (
    <div className="day-tab">
      <h4>{day}</h4>
      <div className="day-details">
        <p>{summary}</p>
        <div className="temp">
          <p>min: {minTemp}&deg;C</p>
          <p>max: {maxTemp}&deg;C</p>
        </div>
      </div>
    </div>
  );
};

const LocationPane = ({ data, location }) => {
  return (
    <section>
      <h3>{location}</h3>
      {data.map(day => (
        <DayTab day={day} key={day.day + day.minTemp + day.maxTemp} />
      ))}
    </section>
  );
};

export default LocationPane;
