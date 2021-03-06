import styles from "./burgerIngredients.module.css";
import { component } from "react";
import propTypes from "prop-types";
const BurgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={styles.BreadBottom}></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={styles.BreadTop}>
          <div className={styles.seads1}></div>
          <div className={styles.seads2}></div>
        </div>
      );
      break;

    case "meat":
      ingredient = <div className={styles.Meat}></div>;
      break;
    case "cheese":
      ingredient = <div className={styles.Cheese}></div>;
      break;
    case "bacon":
      ingredient = <div className={styles.Bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={styles.Salad}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired,
};
export default BurgerIngredient;
