<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "./CoachForm.vue";
export default {
  components: { CoachForm },
  methods: {
    saveData(data) {
      this.$store.dispatch("coach/registerCoach", data);
      this.$router.push("/coaches");
    },
  },
};
</script>

