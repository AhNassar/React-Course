import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Menu from './MenuComponents'; 
import DishDetail from './dishDetailComponent';
import Header from './HeaderComponent';
import { DISHES } from "../shared/dishes"


class Main extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
  }
  
  onDishSelect(dishId){

    this.setState({
        selectedDish: dishId
    });

}

  render() {
    return (
      <div className="Main">
       <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    )
  }
}


export default Main;
