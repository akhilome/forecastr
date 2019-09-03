import React, { useState } from 'react';
import './index.scss';
import LocationPane from '../LocationPane';

const MainContainer = () => {
  const [forecasts, setForecasts] = useState({});
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    fetch(
      `https://forecastr-api.herokuapp.com/api/v1/forecast?locations=${Object.values(
        form
      ).join(',')}`
    )
      .then(data => data.json())
      .then(res => {
        setForecasts({ ...res.data });
        setLoading(false);
      });
  };

  const onInputChange = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value.replace(/,/gi, ' ') });
  };

  return (
    <main>
      <section className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="location1"
            placeholder="First Location"
            onKeyUp={onInputChange}
            required
          />
          <input
            type="text"
            name="location2"
            placeholder="Second Location"
            onKeyUp={onInputChange}
          />
          <input
            type="text"
            name="location3"
            placeholder="Third Location"
            onKeyUp={onInputChange}
          />
          <input
            type="text"
            name="location4"
            placeholder="Fourth Location"
            onKeyUp={onInputChange}
          />
          <input
            type="text"
            name="location5"
            placeholder="Fifth Location"
            onKeyUp={onInputChange}
          />
          <input type="submit" value="Get Forecast" />
        </form>
      </section>
      <section className="locations">
        {loading ? (
          <h2>Loading Forecasts ...</h2>
        ) : (
          <>
            {Object.keys(forecasts).map(forecast => (
              <LocationPane
                key={forecast}
                data={forecasts[forecast]}
                location={forecast}
              />
            ))}
          </>
        )}
      </section>
    </main>
  );
};

export default MainContainer;
