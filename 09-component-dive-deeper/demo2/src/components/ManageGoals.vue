<template>
  <h2>
    Manage Goals
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Plese enter at least a few characters...</p>
        <button @click="confirmError">OK</button>
      </error-alert>
    </teleport>
  </h2>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
        alert("Input must not be empty!");
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>