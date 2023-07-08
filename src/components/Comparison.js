import { Grid, Header } from 'semantic-ui-react';
import CityAirQuality from './CityAirQuality';


const ComparisonView = ({ airQuality1, airQuality2 }) => {
  // check if object is empty
  if (Object.keys(airQuality1).length === 0 && Object.keys(airQuality2).length === 0) {
    return null;
  }

  return (
      <>
        <Header as="h2" style={{ marginTop: '40px' }}>Comparison</Header>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <CityAirQuality cityName={airQuality1?.city} airQuality={airQuality1?.airQuality} />
            </Grid.Column>
            <Grid.Column>
              <CityAirQuality cityName={airQuality2?.city} airQuality={airQuality2?.airQuality} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </>
  );
};

export default ComparisonView;
