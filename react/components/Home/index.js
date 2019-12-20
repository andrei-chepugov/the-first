import React from 'react';
import './index.css';
import PropTypes from 'prop-types'

class Component extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(0)
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 999)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <main>
                <h1>HOME</h1>
                {this.state.date.toISOString()}
            </main>
        );
    }
}

// Component.propTypes = {
//     id: PropTypes.number.isRequired,
//     data: PropTypes.shape( {
//         author: PropTypes.string.isRequired,
//         annotation: PropTypes.string.isRequired,
//         text: PropTypes.string
//     } )
// };

export default Component;