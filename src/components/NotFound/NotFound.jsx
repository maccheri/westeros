import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';

const NotFound = () => (
  <Container>
    <Row>
      <Col style={{ 'text-align': 'center'}}>
        <h1>404 - Page not found</h1>
        <p style={{ 'font-size' : '24px' }}>Você está tentando acessar uma página que eu não fiz. &#x263A;</p>
      </Col>
    </Row>
  </Container>
);

export default NotFound;