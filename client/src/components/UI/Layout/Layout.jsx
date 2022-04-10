import { Fragment } from "react";
import MainHeader from "../../MainHeader/MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <main className="container">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
