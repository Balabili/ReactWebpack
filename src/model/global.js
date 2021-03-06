import { fromJS } from 'immutable';

export default {
  namespace: 'global',
  state: fromJS({
    count: 0,
  }),
  reducers: {
    add(state) {
      return state
        .set('count', state.get('count') + 1);
    },
  },
};
