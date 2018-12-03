export default {
  namespace: 'demo',
  state: {
    count: 0,
  },
  reducer: {
    add(state) {
      return {
        ...state,
        count: state.count + 1,
      };
    },
  }
}