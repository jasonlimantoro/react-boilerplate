import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Actions
import * as actions from '../../actions/test.action';
// Components
import Counter from '../../components/Counter';
import { selectors } from '../../reducers';
// Utils
import { valueType } from '../../components/UtilPropTypes';

class Home extends PureComponent {
  static propTypes = {
    // State
    counter: valueType.isRequired,
    // Actions
    addCounter: PropTypes.func.isRequired,
    minusCounter: PropTypes.func.isRequired,
  };

  render() {
    const { counter, addCounter, minusCounter } = this.props;
    return (
      <Counter counter={counter} onAdd={addCounter} onMinus={minusCounter} />
    );
  }
}

const mapStateToProps = state => ({
  counter: selectors.test.selectCounter(state),
});

export default connect(
  mapStateToProps,
  actions,
)(Home);
