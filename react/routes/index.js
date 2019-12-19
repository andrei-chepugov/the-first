import React from "react";
import {Switch, Route} from "react-router";

const Home = require("../components/Home").default;
const About = require("../components/About").default;

export default class routes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                </Switch>
            </React.Fragment>
        );
    }
}