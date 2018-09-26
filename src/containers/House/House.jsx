import React, { Component } from 'react';
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
        <td colspan="3" style={{ 'text-align' : 'center'}}>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non sem porta, dapibus dui a, consectetur tellus. Ut eleifend dictum erat, viverra tristique neque interdum non. Vestibulum congue erat neque, non scelerisque leo malesuada a. In hendrerit hendrerit sapien, ut hendrerit turpis iaculis quis. Fusce dictum nunc lorem, ut blandit tortor laoreet ac. Vestibulum accumsan eleifend urna non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eget molestie quam.</p>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(House));