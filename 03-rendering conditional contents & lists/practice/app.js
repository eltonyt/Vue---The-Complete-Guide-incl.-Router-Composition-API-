const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      newTask: "",
      visibility: "Show",
      visibilityOption: "Hide",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.length > 0) this.tasks.push(this.newTask);
    },
    updateVisibility() {
      if (this.visibility == "Show") {
        this.visibility = "Hide";
        this.visibilityOption = "Show";
      } else {
        this.visibility = "Show";
        this.visibilityOption = "Hide";
      }
    },
  },
});

app.mount("#assignment");
