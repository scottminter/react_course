import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = props => {
  let ti = [];
  ti.push(<BurgerIngredient key="aldf" type="meat" />);
  ti.push(<BurgerIngredient key="324ewds" type="cheese" />);
  // const transformedIngredients = Object.keys(props.ingredients)
  //   .map((igKey) => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />
  //     });
  //   });

  return (
    <div className={styles.Burger}>
      <div>Burger</div>
      <BurgerIngredient type="bread-top" />
      {ti}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
