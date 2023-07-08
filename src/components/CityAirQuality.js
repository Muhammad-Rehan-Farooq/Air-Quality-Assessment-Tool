import React from 'react';
import { Card } from 'semantic-ui-react';


const CityAirQuality = ({ cityName, airQuality }) => {
  if (!cityName && !airQuality) return null;

  return (
    <Card style={{ margin: 'auto' }}>
      <Card.Content>
        <Card.Header>{cityName}</Card.Header>
        <Card.Description>Air Quality: {airQuality || "Not found"}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CityAirQuality;
