import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Actions
import * as actions from '@/modules/counter/counter.action';
// Components
import Counter from 'components/Counter';
import { selectors } from 'modules/counter';
// Utils
import { valueType } from 'components/UtilPropTypes';

class Home extends PureComponent {
  static propTypes = {
    // State
    count: valueType.isRequired,
    // Actions
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  };

  render() {
    const { count, increment, decrement } = this.props;
    return <Counter counter={count} onAdd={increment} onMinus={decrement} />;
  }
}

export default connect(
  state => ({
    count: selectors.selectCountJS(state),
  }),
  actions,
)(Home);
