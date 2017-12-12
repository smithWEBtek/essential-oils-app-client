import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { ListGroup, ListGroupItem, Button } from 'reactstrap';
// import { Link } from 'react-router-dom';

// import OilsList from '../components/OilsList';
import OilsList from '../components/OilsList';
import { fetchOils, deleteOil } from '../actions/oils';
// import './Oils.css';

class Oils extends Component {

  componentDidMount() {
    this.props.fetchOils()
  }

  onClickDelete = oilID => {
    this.props.deleteOil(oilID)
  }
  
  render() {
    return (
      <div>
        <OilsList oils={ this.props.oils } onClickDelete={ this.onClickDelete }/>
      </div>
    )
  }
  //   const { oils } = this.props;

  //   const renderOils = oils.map(oil =>
  //     <ListGroupItem key={ oil.id }>
  //         <Link key={ oil.id } to={`/oils/${oil.id}`}>{ oil.name }</Link>
  //         <Button 
  //           color="danger" 
  //           size="sm"
  //           style={{ float: "right" }}
  //           onClick={() => this.onClickDelete(oil.id) }
  //           >
  //           Delete
  //           </Button>
  //     </ListGroupItem>
  //   );

  //   return (
  //     <div>
  //         <ListGroup>
  //             { renderOils }
  //         </ListGroup>
  //     </div>
  //   );
  // }
}

const mapStateToProps = (state) => {
  return ({
    oils: state.oils
  })
}

export default connect(mapStateToProps, { fetchOils, deleteOil })(Oils);