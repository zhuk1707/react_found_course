import React from 'react';
import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.loader__item}></div>
      <div className={classes.loader__notice}>
        Loading
      </div>
    </div>
  );
};

export default Loader;