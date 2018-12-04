import React, { useState } from 'react';
import { connect } from 'dva';
import { Button, Form } from 'antd';
import styles from './App.less';
import image from './assets/aaa.png'

function App(props) {
  const [stateCount, setStateCount] = useState(0);
  const { dispatch, demo } = props;
  const count = demo.get('count');

  return (
    <div>
      <div>stateCount:{stateCount}</div>
      <div>reduxCount:{count}</div>
      <Button onClick={() => { setStateCount(stateCount + 1); }}>state+</Button>
      <Button className="button" onClick={() => { setStateCount(stateCount - 1); }}>state-</Button>
      <br />
      <Button onClick={() => { dispatch({ type: 'demo/add' }); }} type="primary">redux+</Button>
      <br />
      <img src={image} />
    </div>
  );
}

export default Form.create()(connect(({ demo }) => ({ demo }))(App));
