const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      styleClass: "",
      visibleClass: "visible",
      userStyling:"",
    };
  },
  watch: {
    userInput() {
      if (this.userInput === "user1") this.styleClass = "user1";
      else if (this.userInput === "user2") this.styleClass = "user2";
      else this.styleClass = "";
    },
  },
  methods: {
    updateVisability() {
      if (this.visibleClass === "hidden") this.visibleClass = "visible";
      else this.visibleClass = "hidden";
    },
  }
});

app.mount("#assignment");
