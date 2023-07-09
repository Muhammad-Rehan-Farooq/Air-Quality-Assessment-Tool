import React from 'react';
import { Card } from 'semantic-ui-react';


const CityAirQuality = ({ airQuality }) => {
  if (!(airQuality !== null && typeof airQuality === "object" && Object.keys(airQuality).length > 0)) {
    return (
      <Card style={{ margin: 'auto' }}>
        <Card.Content>
          <Card.Header>Invalid City</Card.Header>
        </Card.Content>
      </Card>
    );
  }

  return (
    <Card style={{ margin: 'auto' }}>
      <Card.Content>
        <Card.Header>City: {airQuality?.city || "Not found"}</Card.Header>
        <Card.Description>
          Location: {airQuality?.location || "Not found"}
        </Card.Description>
        <Card.Description>
          {airQuality?.measurements?.[0]?.parameter || "Not Found"}: {' '} 
          {airQuality?.measurements?.[0]?.sourceName || "Not found"}
        </Card.Description>
        <Card.Description>
          {airQuality?.measurements?.[0]?.value || "Not found"} {' '}
          {airQuality?.measurements?.[0]?.unit || "Not found"}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CityAirQuality;
