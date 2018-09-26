import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  Button,
  Container, 
  Row, 
  Col,
  Form,
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

    this.state = {
      busca: '',
    };
  }

  componentDidMount() {
    this.props.getHouses();
  }

  handleChange(event) {
    if (!event.target.value) {
      this.props.getHouses();
    }

    this.setState({ busca: event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.busca) {
      this.props.getHouses(this.state.busca);
    } 
  }

  renderCards() {
    if (!this.props.houses) {
      return null;
    }
    
    const cards = this.props.houses.map((houseInfo, index) => <Card key={`house-${index}`} {...houseInfo} />);

    return cards;
  }

  render() {
    return (
      <Container>
        <h1>Casas de Westeros</h1>
        <Row>
          <Col xs="6" className="input-busca">
            <Form onSubmit={(e) => this.handleSubmit(e)}>
              <InputGroup>
                <Input onChange={(event) => this.handleChange(event)} value={this.state.busca} placeholder="Buscar por nome..." />
                <InputGroupAddon addonType="append">
                  <Button type="submit" >Buscar</Button>
                </InputGroupAddon>
              </InputGroup>
            </Form>
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
    getHouses: (name) => {
      dispatch(loading())
      getHouses(dispatch, name)
    },
  }
)

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  houses: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, 
    region: PropTypes.string, 
    coatOfArms: PropTypes.string, 
    lord: PropTypes.shape({
      name: PropTypes.string.isRequired,
      born: PropTypes.string,
    }),
    id: PropTypes.string.isRequired,
    swornMembers: PropTypes.array.isRequired,
    words: PropTypes.string.isRequired,
    titles: PropTypes.array.isRequired,
  })).isRequired,
  getHouses: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);