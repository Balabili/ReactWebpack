import { fromJS } from 'immutable';

export default {
  namespace: 'demo',
  state: fromJS({
    demoCount: 10,
  }),
  reducers: {
    add(state) {
      return state
        .set('demoCount', state.get('demoCount') + 1);
    },
  },
};
