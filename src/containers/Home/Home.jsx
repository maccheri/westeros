import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { getHouses, loading } from './actions';

class Home extends Component {
  
  constructor(props) {
    super(props); 

  }

  componentDidMount() {
    this.props.getHouses();
  }

  renderCards() {
    if (!this.props.houses) {
      return null;
    }

    console.log(this.props.houses);

    const cards = this.props.houses.map((houseInfo, index) => <Card key={`house-${index}`} {...houseInfo} />);

    return cards;
  }

  render() {
    return (
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
        {this.renderCards()}
      </Container>
    );
  }
}

const mapStateToProps = ({ loading, houses }) => {
  return { loading, houses };
}


const mapDispatchToProps = (dispatch) => (
  {
    getHouses: () => {
      dispatch(loading())
      getHouses(dispatch)
    },
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);