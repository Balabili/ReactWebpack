import React from 'react';
import PureComponent from '../components/PureComponent';
import InputComponent from '../components/Input';

export default class Demo extends PureComponent {
  state = { name: 'test' }

  render() {
    const { name } = this.state;
    return (
      <div>
        <InputComponent />
        <div>我是{name}</div>
      </div>
    );
  }
}
