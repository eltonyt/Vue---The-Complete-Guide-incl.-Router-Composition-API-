<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">
      Active Goals
    </button>
    <button @click="setSelectedComponent('manage-goals')">
      Manage Goals
    </button>
    <!-- <active-goals v-if="selectedComponenet === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponenet === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="setSelectedComponent">
      </component>
    </keep-alive>
  </div>
</template>

<script>
// import TheHeader from '../../demo/src/components/TheHeader.vue';
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    "the-header": TheHeader,
    // "user-info": UserInfo,
    // "badge-list": BadgeList,
    // "course-goals": CourseGoals,
    "active-goals": ActiveGoals,
    "manage-goals": ManageGoals,
    TheHeader,
  },
  data() {
    return {
      selectedComponenet:"active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponenet = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>