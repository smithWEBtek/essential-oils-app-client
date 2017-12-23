import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const OilsList = ({ oils }) => {
  // oils returns [] ? 
  // debugger; 

  const renderOils = oils.map(oil =>



        <ListGroupItem key={ oil.id }>
            <Link key={ oil.id } to={`/oils/${oil.id}`}>{ oil.name }</Link>
        </ListGroupItem>
    );

    return (
        <ListGroup>
            { renderOils }
        </ListGroup>
    );
};

export default OilsList;