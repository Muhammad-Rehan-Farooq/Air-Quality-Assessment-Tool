import { useState } from "react";
import { Container, Header } from "semantic-ui-react";

import ComparisonView from "./Comparison";
import SearchForm from "./SearchForm";


function Home() {
  const [airQuality1, setAirQuality1] = useState({});
  const [airQuality2, setAirQuality2] = useState({});

  const setAirQualities = (AQ1, AQ2) => {
    setAirQuality1(AQ1);
    setAirQuality2(AQ2);
  };

  return (
    <Container textAlign="center" style={{ marginTop: '40px' }}>
      <Header as="h1">Air Quality Assessment Tool</Header>
      <SearchForm setAirQualities={setAirQualities} />
      <ComparisonView airQuality1={airQuality1} airQuality2={airQuality2} />
    </Container>
  )
}

export default Home;
