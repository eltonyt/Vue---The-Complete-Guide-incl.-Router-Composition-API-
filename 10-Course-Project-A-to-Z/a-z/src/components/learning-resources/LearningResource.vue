<template>
  <li>
    <base-card>
      <header>
        <!-- TITLE -->
        <h3>{{ title }}</h3>
        <!-- DELETE BUTTON -->
        <base-button mode="flat" @click="deleteResource(id)">Delete</base-button>
      </header>
      <!-- DESCRIPTION -->
      <p>{{ description }}</p>
      <!-- LINK -->
      <nav>
        <a v-bind:href="link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  inject:['deleteResource'],
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
