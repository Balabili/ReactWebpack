export default {
  namespace: 'demo',
  state: {
    count: 0,
  },
  reducers: {
    add(state) {
      return {
        ...state,
        count: state.count + 1,
      };
    },
  }
}