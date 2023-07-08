import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Loader } from 'semantic-ui-react';


const SearchForm = ({ setAirQualities }) => {
  const [city1, setCity1] = useState('');
  const [city2, setCity2] = useState('');
  const [isLoading, setIsLoading] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response1 = await axios.get(
        `https://api.openaq.org/v1/latest?country_id=US&city=${city1}`
      );
      const response2 = await axios.get(
        `https://api.openaq.org/v1/latest?country_id=US&city=${city2}`
      );
      const AQ1 = response1?.data?.results?.[0]?.measurements?.[0]?.value;
      const AQ2 = response2?.data?.results?.[0]?.measurements?.[0]?.value;
      setAirQualities({city: city1, airQuality: AQ1}, {city: city2, airQuality: AQ2});
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching air quality data:', error);
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input
          placeholder="Enter city 1"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
          width={8}
          required
        />
        <Form.Input
          placeholder="Enter city 2"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
          width={8}
          required
        />
        <Button type="submit" primary disabled={isLoading}>
          {isLoading ? <Loader active inline size="tiny" /> : 'Compare'}
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchForm;
