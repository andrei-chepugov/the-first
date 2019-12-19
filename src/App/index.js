import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Add from '../components/Add';
import News from '../components/News';

import './index.css';

import { setYear } from '../store/actions/PageActions'


import myNews from './myNews';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      news: myNews
    };
    this.handleAddNews = data => {
      const nextNews = [data, ...this.state.news];
      this.setState({ news: nextNews });
    };
  }
  render() {
    return (
      <React.Fragment>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        <News data={this.state.news} />
      </React.Fragment>
    );
  }
}

// export default App;

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => dispatch(setYear(year)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

