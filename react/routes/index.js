import React from "react";
import { Switch, Route } from "react-router-dom";

const Header = require("../components/Header").default;
const Footer = require("../components/Footer").default;
const Home = require("../components/Home").default;
const About = require("../components/About").default;

export default class routes extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}