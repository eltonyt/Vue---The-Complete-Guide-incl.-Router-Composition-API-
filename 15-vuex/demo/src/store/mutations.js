export default {
  setAuth(state, payload) {
    state.isLogedIn = payload.isAuth;
  },
};
