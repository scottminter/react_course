import React from 'react';
import Aux from './../../../hoc/Aux';
import Button from './../../UI/Button/Button';
import Price from '../BuildControls/Price/Price';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key => {
      return (
        <li key={props.ingredients[key] + key}>
          <span style={{textTransform: 'capitalize'}}>{key}</span> x {props.ingredients[key]}
        </li>
      );
    });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      {/* <p>Total Price: <strong>${props.totalPrice}</strong></p> */}
      <Price label="Total Price" price={props.totalPrice} />
      <p>Continue to checkout?</p>
      <Button buttonType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button buttonType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </Aux>
  );
};

export default orderSummary;
