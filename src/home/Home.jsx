import React from 'react';
import { 
  Button,
  Container, 
  Row, 
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
} from 'reactstrap';
import './home.css';

const Home = () => (
  <Container>
    <h1>Casas de Westeros</h1>
    <Row>
      <Col xs="6">
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
            <Button>Buscar</Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
    <Row>
      LISTA AQUI
    </Row>
  </Container>
);

export default Home;