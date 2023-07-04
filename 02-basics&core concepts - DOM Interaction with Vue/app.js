const app = Vue.createApp({
  data: function () {
	return {
		courseGoal: "Master Vue",
		vueLink: 'https://vuejs.org/'
	};
  },
});

app.mount("#user-goal");
