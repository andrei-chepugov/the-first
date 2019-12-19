import React from 'react';
import './index.css';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class Component extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <footer>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </footer>
        );
    }
}


export default Component;