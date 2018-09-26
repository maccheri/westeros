import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
  Container, 
  Row, 
  Col,
  Table,
} from 'reactstrap';
import './house.css';
import { getSwornMembers, loading } from './actions';

class House extends Component {
  constructor(props) {
    super(props);

    this.state = {
      house: {},
    }
  }

  componentDidMount() {
    this.hasHouses();
  }
  
  getSelectedHouse() {
    if(this.props.match.params.id && _.isEmpty(this.state.house)) {
      const id = this.props.match.params.id;
      const house = this.props.houses.filter(house => house.id === id)[0];
      this.props.getSwornMembers(house.swornMembers);
      this.setState({ house });
    }
  }
 
  hasHouses() {
    if(this.props.houses.length > 0) {
      this.getSelectedHouse();
    }
  }

  listSwornMembers() {
    if (_.isEmpty(this.props.members)) {
      return (<tr>
        <td colSpan="3" style={{ 'textAlign' : 'center'}}>
          Nenhum membro foi encontrado.
        </td>
      </tr>);
    }

    const { members } = this.props;
    if (members.length > 0) {
      const lista = members.map((member, index) => (
          <tr key={`sworn-${index}`}>
            <td>{member.name}</td>
            <td>{member.born || 'Nenhum dado encontrado'}</td>
            <td>{member.gender}</td>
          </tr>
        ));

      return lista;
    }
  }

  listTitles() {
    if (!this.state.house.titles) {
      return null;
    }

    const compactedTitles = _.compact(this.state.house.titles);

    if (compactedTitles.length > 0) {
      const titles = compactedTitles.join().split(',').map((title, key) => <li key={`title-${key}`}>{title}</li>);
      return (
        <div>
          <p>Titles:</p>
          <ul>{titles}</ul>
        </div>
      )
    } else {
      return null;
    }
  }

  render () {
    if (this.props.houses.length === 0) {
      this.props.history.push('/');
    }

    const { house } = this.state;

    return (
      <Container>
        <h1>{house.name}</h1>
        <Row className="description">
          <Col>
            <p><b>Info da casa</b></p>
            {house.region && <p>Region: {house.region}</p>}
            {house.coatOfArms && <p>Coat of Arms: {house.coatOfArms}</p>}
            {house.words && <p>Words: {house.words}</p>}
            {this.listTitles()}
            {_.has(house, 'lord.name') && <p>Lord: {house.lord.name}</p>}
          </Col>
        </Row>
        <Row>
          <Col>
            <p><b>Sworn Members:</b></p>
            <Table hover>
              <tbody>
                {this.listSwornMembers()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ houses, members }) => {
  return { houses, members };
}

const mapDispatchToProps = (dispatch) => (
  {
    getSwornMembers: (members) => {
      dispatch(loading())
      getSwornMembers(dispatch, members)
    },
  }
)

House.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
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
  members: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    born: PropTypes.string,
    gender: PropTypes.string.isRequired,
  })),
  getSwornMembers: PropTypes.func.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(House));