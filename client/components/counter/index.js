import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>
          <button
            onClick={() => this.setState(({ count }) => ({ count: count + 1 }))}
          >
            Count is {this.state.count}
          </button>
        </p>
      </div>
    );
  }
}

export default Counter;
