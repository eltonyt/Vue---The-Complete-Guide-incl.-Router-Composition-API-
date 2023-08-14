<template>
  <!-- <section>FILTER</section> -->
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as a Coach</base-button>
      </div>
      <ul v-if="hasCoach">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.div"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></coach-item>
      </ul>
      <p v-else>No Coaches Found.</p>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "./CoachItem.vue";
import CoachFilter from "./CoachFilter.vue";

export default {
  components: { CoachItem, CoachFilter },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters["coach/coaches"];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend"))
          return true;
        if (this.activeFilters.backend && coach.areas.includes("backend"))
          return true;
        if (this.activeFilters.career && coach.areas.includes("career"))
          return true;
        return false;
      });
    },
    hasCoach() {
      return this.$store.getters["coach/hasCoach"];
    },
  },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
    };
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>