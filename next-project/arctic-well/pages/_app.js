import "../styles/globals.css";
import "../styles/variables.css";
// import myDevice from "../components/deviceFrame";


function MyApp({ Component, pageProps }) {
  return (
    // <myDevice>
      <Component {...pageProps} />
      // </myDevice>
  );
}

export default MyApp;


//context 
//shared state management
