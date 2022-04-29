import Banner from "./banner";
import Navbar from "./Navbar";
import Background from "../pages/background";

const Layout = ({ children }) => {
  return (
    <div>
      <Background />
      <Banner />
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
