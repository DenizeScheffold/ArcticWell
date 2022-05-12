import Banner from "./banner";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div id="layout-div">
      <Banner />
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
