import React, { useState } from 'react';
import { connect } from 'dva';
import { Route, Switch } from 'dva/router';
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import styles from './App.less'; // eslint-disable-line
import image from '../assets/aaa.png';
import Demo from '../pages/Demo';
import Test from '../pages/Test';

function App(props) {
  const [stateCount, setStateCount] = useState(0);
  const { dispatch, global } = props;
  const count = global.get('count');

  return (
    <div>
      <div>stateCount:{stateCount}</div>
      <div>reduxCount:{count}</div>
      <Button onClick={() => { setStateCount(stateCount + 1); }}>state+</Button>
      <Button className="button" onClick={() => { setStateCount(stateCount - 1); }}>state-</Button>
      <br />
      <Button onClick={() => { dispatch({ type: 'global/add' }); }} type="primary">gloabl redux+</Button>
      <br />
      <img src={image} alt="" />
      {
        <Switch>
          <Route path="/demo" exact component={() => <Demo />} />
          <Route path="/test" exact component={() => <Test />} />
        </Switch>
      }
    </div>
  );
}

export default Form.create()(connect(({ global, loading }) => ({ global, loading }))(App));
