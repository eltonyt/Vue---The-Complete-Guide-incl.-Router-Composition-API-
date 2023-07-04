const app = Vue.createApp({
  data: function () {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add1() {
      this.counter++;
    },
    minus1() {
      this.counter--;
    },
    add(num) {
      this.counter += num;
    },
    minus(num) {
      this.counter -= num;
    },
    updateName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput(event) {
      this.confirmedName = event.target.value;
    },
  },
});

app.mount("#events");
