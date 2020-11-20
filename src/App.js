import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
// import { LinkContainer } from 'react-router-bootstrap';

import './App.css';
import useListings from './hooks';
import { ListingCard } from './components';

// const Home = () => <span>Home</span>;

// const About = () => <span>About</span>;

// const Users = () => <span>Users</span>;

const App = () => {
  const { data: listings } = useListings();
  return (
    <MemoryRouter>
      <Container className='p-3'>
        <Jumbotron>
          <h1>Apple Swap</h1>
        </Jumbotron>
        <Row>
          {listings?.map((listing, index) => {
          console.log("App -> listing", listing)
            return (
              <Col sm='12' className='mb-3' key={index}>
                <ListingCard
                  title={listing?.data?.title}
                  description={listing?.data?.selftext_html}
                  url={listing?.data?.url}
                  created={listing?.data?.created_utc}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </MemoryRouter>
  );
};

export default App;
