import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  Navbar,
  NavbarText,
} from 'reactstrap';

/* Components */
import Filters from './views/Filters';
import Table from './views/Table';

/* Styles */
import './App.css';

const App = () => (
  <Container>
    <Row>
      <Col>
        <Navbar color='dark' dark>
          <NavbarText>Тестовое задание для TravelAsk</NavbarText>
        </Navbar>
      </Col> 
    </Row>
    <br />
    <Row>
      <Col xs='4'>
        <Filters />
      </Col>
      <Col xs='8'>
        <Table />
      </Col>
    </Row>
  </Container>
);

export default App;
