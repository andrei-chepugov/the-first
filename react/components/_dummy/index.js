import React from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Component extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div></div>
        );
    }
}

Component.propTypes = {
    id: PropTypes.number.isRequired,
    data: PropTypes.shape( {
        author: PropTypes.string.isRequired,
        annotation: PropTypes.string.isRequired,
        text: PropTypes.string
    } )
};

export default Component;