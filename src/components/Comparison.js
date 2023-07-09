import { Grid, Header } from 'semantic-ui-react';
import CityAirQuality from './CityAirQuality';
import Diff from './diff';
import { useEffect, useState } from 'react';


const ComparisonView = ({ airQuality1, airQuality2 }) => {
  const [diff, setDiff] = useState({});

  useEffect(() => {
    if (airQuality1?.measurements?.[0]?.value < airQuality2?.measurements?.[0]?.value) {
      setDiff({
        city: airQuality1?.city,
        unit: airQuality1?.measurements?.[0]?.unit,
        diff: airQuality2?.measurements?.[0]?.value - airQuality1?.measurements?.[0]?.value,
      })
    } else if (airQuality1?.measurements?.[0]?.value > airQuality2?.measurements?.[0]?.value) {
      setDiff({
        city: airQuality2?.city,
        unit: airQuality2?.measurements?.[0]?.unit,
        diff: airQuality1?.measurements?.[0]?.value - airQuality2?.measurements?.[0]?.value
      });
    }
  }, [airQuality1, airQuality2]);
  
  // check if object is empty
  if (!(airQuality1 !== null && typeof airQuality1 === "object" && Object.keys(airQuality1).length > 0)
    && !(airQuality2 !== null && typeof airQuality2 === "object" && Object.keys(airQuality2).length > 0)
  ) {
    return null;
  }
  
  return (
      <>
        <Header as="h2" style={{ marginTop: '40px' }}>Comparison</Header>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <CityAirQuality airQuality={airQuality1} />
            </Grid.Column>
            <Grid.Column>
              <Diff diff={diff} />
            </Grid.Column>
            <Grid.Column>
              <CityAirQuality airQuality={airQuality2} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </>
  );
};

export default ComparisonView;
