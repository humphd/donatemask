import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

// Map is autogenerated and hosted at https://github.com/EBSECan/canada-map-requests
const mapUrl = "https://ebsecan.github.io/canada-map-requests/map.png";

const RequestsMap = () => (
  <Container id="requests-map">
    <Row className="justify-content-center">
      <Col xs={12}>
        <Card>
          <CardBody>
            <CardTitle tag="h3">Donate A Mask Request Map</CardTitle>
            <CardText>
              Since January 2022, we've had <Link to="/request">requests for masks and rapid tests</Link> from every region of Canada shown in red below.
              Help us continue to support these and other vulnerable people across Canada with a <Link to="/donate">donation</Link> or
              by purchasing items in our <Link to="/buy">charity store</Link>.  All proceeds go towards sending free masks and tests to people in need across Canada.
            </CardText>
          </CardBody>
          <CardImg
            alt="Map of requests across Canada"
            src={mapUrl}
            bottom
            width="100%"
          />
        </Card>
      </Col>
    </Row>
  </Container>
);

export default RequestsMap;
