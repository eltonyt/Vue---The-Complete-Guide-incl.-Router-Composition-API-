const app = Vue.createApp({
  data() {
    return {
      field1: "",
      confirmedFiled1: "",
    };
  },
  methods: {
    showAlert() {
      alert("You clicked on 'Show Alert'!");
    },
    updatefield1(event) {
      this.field1 = event.target.value;
    },
    confirmfield1(event) {
      this.confirmedFiled1 = event.target.value;
    },
  },
});

app.mount("#assignment");
