import { Card } from 'semantic-ui-react';

const Diff = ({ diff }) => {
  if (Object.keys(diff).length === 0) {
    return null;
  }
  
  return (
    <Card style={{ margin: 'auto' }}>
      <Card.Content>
        <Card.Header>{diff?.city} has better Air Quality</Card.Header>
        <Card.Description>
          Difference
        </Card.Description>
        <Card.Description>
          {`${diff?.diff} ${diff?.unit}` || "Not Found"}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Diff;
