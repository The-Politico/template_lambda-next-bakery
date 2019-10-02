import React from 'react';
import { Button } from '@politico/interactive-style-sketch';

import { component } from './styles.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className={component} >
        <Button
          onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}
        >
          Count
        </Button> <p>{this.state.count}</p>
      </div>
    );
  }
}

export default Counter;
