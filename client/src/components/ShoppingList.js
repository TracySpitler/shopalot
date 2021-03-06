import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import ItemModal from './ItemModal';

class ShoppingList extends Component{
  // load the list from store.js
  componentDidMount() {
    this.props.getItems();
  }

  // delete function
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render(){

    const { items } = this.props.item;
    return (

      <Container>
        <ItemModal />

        <ListGroup className="card-deck">
          <TransitionGroup className="shopping-list">
            {items.map(({_id, name, price, description, imagePath}) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >&times;</Button>
                  {name}
                  <p></p>
                  <p>Price: ${price}</p>
                  <p>Description: {description}</p>
                  <img src={imagePath} alt={name} style={{maxWidth: '30vw'}}/>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>

      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
