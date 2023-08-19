export default {
  registerCoach(state, coach) {
    state.coaches.push(coach);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  }
};
