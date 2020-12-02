import React from "react";
import Auxe from "../../hoc/Auxe";
// to import css classes
import classes from "./Layout.css";

// this is jsx return (), that has to be wrapped by
const layout = (props) => (
  <Auxe>
    <div>Toolbar, SideBar, BackDrop</div>
    <main className={classes.Content}>
    {props.children}
    </main>
  </Auxe>
);

export default layout;
