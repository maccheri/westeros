import React from 'react';
import { 
  Button,
  Container, 
  Row, 
  Col,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';
import './home.css';
import Card from '../../components/Card';

const Home = () => (
  <Container>
    <h1>Casas de Westeros</h1>
    <Row>
      <Col xs="6" className="input-busca">
        <InputGroup>
          <Input placeholder="Buscar por nome..." />
          <InputGroupAddon addonType="append">
            <Button>Buscar</Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
    <Card />
    <Card />
    <Card />
    <Card />
  </Container>
);

export default Home;