import React from 'react';
import { connect } from 'react-redux';
import { 
  Container, 
  Row, 
  Col,
  Table,
} from 'reactstrap';
import './detail.css';

const Detail = () => (
  <Container>
    <h1>House Stark</h1>
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
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

const mapStateToProps = ({ loading, houseDetail }) => {
  return { loading, houseDetail };
}

export default connect(mapStateToProps, null)(Detail);