import React from 'react';
import { Jumbotron } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Essential Oils Directory</h1>
        <p className="lead">This app contains all types of information about essential oils. </p>
        <hr className="my-2" />
        <p>Thank you for visiting.</p>
      </Jumbotron>
    </div>
  );
};

export default Home;