import React, {Component} from 'react';
// import styles from './BurgerBuilder.module.css';
import Aux from './../../hoc/Aux';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  constructor (props) {
    super(props);

    this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
    this.addIngredientHandler = this.addIngredientHandler.bind(this);
    this.updatePurchaseState = this.updatePurchaseState.bind(this);
  }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false
  };

  addIngredientHandler (type) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler (type) {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = (updatedCount > 0) ? updatedCount : 0;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({purchaseable: (sum > 0)});
    console.log(this.state);
  }

  orderClickHandler () {
    console.log('order your burger');
  }

  render () {
    const disableInfo = {
      ...this.state.ingredients
    };
    for (let key in disableInfo) {
      if (this.state.ingredients[key] <= 0) {
        disableInfo[key] = true;
      } else {
        disableInfo[key] = false;
      }
    }

    return (
      <Aux>
        <div>
          <Burger ingredients={this.state.ingredients} />
        </div>
        <div>
          <BuildControls
            ingredientSubtracted={this.removeIngredientHandler}
            ingredientAdded={this.addIngredientHandler}
            disableRemoveButton={disableInfo}
            totalPrice={this.state.totalPrice}
            purchaseable={this.state.purchaseable}
            orderClick={this.orderClickHandler}
          />
        </div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
