import { node } from "prop-types";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
Layout.prototype = {
  children: node.isRequired,
};

export default Layout;
