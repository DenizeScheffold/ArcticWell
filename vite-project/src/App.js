// Currently not functional
// @TODO: either delete this or get the required dependencies and scripts into package.json and make it work

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import navbar from "./components/navbar";
import Home from './pages/navbar/home';
import Map from './pages/navbar/map';
import More from './pages/navbar/more';
import "./App.css";

function App(){
    return (
        <Router>
            <navbar></navbar>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/map" component={Map} />
                <Route path="/more" component={More} />
            </Switch>
        </Router>
    );
}

export default App;