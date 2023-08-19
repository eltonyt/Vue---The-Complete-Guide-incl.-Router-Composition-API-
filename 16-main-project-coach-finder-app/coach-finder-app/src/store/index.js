import { createStore } from "vuex";
import coachModule from "./modules/coach/index.js";
import requestModule from "./modules/request/index.js";

const store = createStore({
  modules: {
    coach: coachModule,
    request: requestModule,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
