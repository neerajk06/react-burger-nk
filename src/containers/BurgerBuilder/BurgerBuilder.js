import React, { Component } from "react";
import Auxe from "../../hoc/Auxe";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";


const INGREDIENT_PRICES ={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice:4
  };

  addIngredientHandler = (type) => {
      console.log("add Ingredient func;")
    const oldCount = this.state.ingredients[type];
    // eslint-disable-next-line
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <=0)
    {
        return;
    }
    // eslint-disable-next-line
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

  };

  render() {
    return (
      <Auxe>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls ingredientAdded ={this.addIngredientHandler}
        ingredientRemoved ={this.removeIngredientHandler} />
      </Auxe>
    );
  }
}

export default BurgerBuilder;
