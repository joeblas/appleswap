import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';

import './App.css';
import useListings from './hooks';
import { ListingCard } from './components';

const App = () => {
  const { data: listings } = useListings();
  return (
    <MemoryRouter>
      <Container fluid className='bg-dark'>
        <Container className='p-3'>
          <Jumbotron className='jumboGradientBg'>
            <h1>Apple Swap</h1>
            <p>Find people selling Apple products you want!</p>
          </Jumbotron>
          <Row>
            {listings?.map((listing) => {
              return (
                <Col sm='12' className='mb-3' key={listing?.data?.id}>
                  <ListingCard
                    title={listing?.data?.title}
                    description={listing?.data?.selftext_html}
                    url={listing?.data?.url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </Container>
    </MemoryRouter>
  );
};

export default App;
