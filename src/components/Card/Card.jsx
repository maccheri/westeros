import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { 
	Container,
  Row, 
  Col,
} from 'reactstrap';
import './card.css';

const Card = ({ name, coatOfArms, region, lord, id }) => (
	<Container className="house-card">
		<Link to={`/house/${id}`} style={{ textDecoration: 'none', color: 'unset' }}>
			<Row>
				<Col xs="8" className="house-info">
					<h2>{name}</h2>
					<p>{coatOfArms}</p>
					<p>{region}</p>
				</Col>
				<Col xs="4" className="lord-info">
				<div className="info">
					<p><b>{_.has(lord, 'name') ? lord.name : 'Senhor da casa não definido no momento'}</b></p>
					<p>{_.has(lord, 'born') && lord.born}</p>
				</div>
				</Col>
			</Row>
		</Link>
	</Container>
);

export default Card;