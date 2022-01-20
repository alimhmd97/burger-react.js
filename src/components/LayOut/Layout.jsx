import Aux from "../HOC/Auxx";
import styles from "./LayOut.module.css";
const Layout = (props) => {
  return (
    <Aux>
      <div className={styles.m}></div>
      <main>{props.children}</main>
    </Aux>
  );
};
export default Layout;
