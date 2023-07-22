<template>
  <li>
    <div>
      <header>
        <!-- TITLE -->
        <h3>{{ title }}</h3>
        <!-- DELETE BUTTON -->
        <button>Delete</button>
      </header>
    </div>
    <!-- DESCRIPTION -->
    <p>{{ description }}</p>
    <!-- LINK -->
    <nav>
      <a v-bind:href="link">View Resource</a>
    </nav>
  </li>
</template>

<script>
export default {
  props: {
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
