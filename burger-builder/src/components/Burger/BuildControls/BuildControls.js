import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = props => {
  return (
    <div className={styles.BuildControls}>
      <p>Current Price: <strong>${props.totalPrice.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          removed={() => props.ingredientSubtracted(ctrl.type)}
          added={() => props.ingredientAdded(ctrl.type)}
          disable={props.disableRemoveButton[ctrl.type]}
        />
      ))}
      <button className={styles.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.orderClick}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
