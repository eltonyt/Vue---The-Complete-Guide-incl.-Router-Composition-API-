const app = Vue.createApp({
  data: function () {
    return {
      counter: 0,
      result: "RESULT",
    };
  },
  watch: {
    counter(value) {
      if (value == 37) this.result = "Bingo!";
      else if (value < 37) this.result = "Not there yet";
      else this.result = "Too much!";
    },
	result(currentValue, previousValue) {
		console.log('Watcher executing...');
		if (previousValue === "Not there yet" || previousValue === "Bingo") {
			const that = this;
			setTimeout(function () {
				that.counter = 0;
			}, 5000);
		}
	},
  },
  methods: {
    addOne() {
      this.counter += 1;
    },
    addFive() {
      this.counter += 5;
    },
  },
});

app.mount("#assignment")
