import React from 'react';
import { connect } from 'dva';
import Button from 'antd/lib/button';
import PureComponent from '../components/PureComponent';
import InputComponent from '../components/Input';

export default
@connect(({ demo }) => ({
  demo,
}))
class Demo extends PureComponent {
  state = { name: 'demo' }

  render() {
    const { name } = this.state;
    const { dispatch, demo } = this.props;
    return (
      <div>
        <div>我是{name}</div>
        <div>demo count : {demo.get('demoCount')}</div>
        <Button onClick={() => { dispatch({ type: 'demo/add' }); }} type="primary">demo redux+</Button>
        <InputComponent />
      </div>
    );
  }
}
