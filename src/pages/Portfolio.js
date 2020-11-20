import React from "react";
import 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

const Icon = 1;
const CardTitle = "Weather App";
 
function Portfolio() {
  return (
    <Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="https://jen6one9.github.io/that-weather-dashboard/" target="_blank"></a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Weather Dashboard</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Simple weather app that leverages the OpenWeather API.
    </Card>
  </Col>
</Row>
  );
}

export default Portfolio;
