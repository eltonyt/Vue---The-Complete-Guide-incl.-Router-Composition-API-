const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredGoal: "",
    };
  },
  methods: {
    addGoal() {
      if (this.enteredGoal.length > 0) this.goals.push(this.enteredGoal);
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    },
  },
});

app.mount("#user-goals");
