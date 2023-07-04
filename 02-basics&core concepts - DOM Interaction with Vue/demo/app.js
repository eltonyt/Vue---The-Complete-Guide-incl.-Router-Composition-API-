const app = Vue.createApp({
  data: function () {
    return {
      courseGoal: "Master Vue",
	  courseGoalB: "Learn Vue",
      vueLink: "https://vuejs.org/",
	  htmlEl: "<h1> Hello Vue </h1>",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue!";
      } else {
        return "Master Vue!";
      }
    },
    outputGoalA() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoal
      } else {
        return this.courseGoalB
      }
    },
  },
});

app.mount("#user-goal");
