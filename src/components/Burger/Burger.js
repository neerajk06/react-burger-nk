import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    // need to debugg this to understand or simplyfy it
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
     return <BurgerIngredient key={igKey + 1} type={igKey} />;
    });
  })
  .reduce((previousVal,currentVal)=>{
      return previousVal.concat(currentVal)
  },[]); // [] is initial value

  if(transformedIngredients.length ===0)
  {
      transformedIngredients = <p>Please start adding Ingredients!</p>
  }

  console.log(transformedIngredients);

  // here div is used to give styles
  // we implemented props type validation in "BurgerIngredient", so need to use type as string
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
