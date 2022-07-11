import { Fragment } from "react";

import classes from './index.module.css'

const Button = (props) => {
  return (
    <Fragment>
      <button className={classes.button}>{props.children}</button>
    </Fragment>
  );
};

export default Button;
