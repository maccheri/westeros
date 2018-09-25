import React from 'react';
import { Link } from 'react-router-dom';
import { 
	Container,
  Row, 
  Col,
} from 'reactstrap';
import './card.css';

const Card = (props) => (
	<Container className="house-card">
		<Link to="/detail/123" style={{ textDecoration: 'none', color: 'unset' }}>
			<Row>
				<Col xs="8" className="house-info">
					<h2>Nome da Casa</h2>
					<p>Coat of Arms</p>
					<p>Região</p>
				</Col>
				<Col xs="4" className="lord-info">
				<div className="info">
					<p><b>Nome do Lorde Principal</b></p>
					<p>Ano de Nascimento</p>
				</div>
				</Col>
			</Row>
		</Link>
	</Container>
);

export default Card;