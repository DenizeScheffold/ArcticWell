import Navbar from "./Navbar";

const LayoutMap = ({ children }) => {
  return (
    <div id="layout-div">
      {children}
      <Navbar />
    </div>
  );
};

export default LayoutMap;
