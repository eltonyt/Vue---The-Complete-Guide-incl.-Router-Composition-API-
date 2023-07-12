<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorate)" : "" }}</h2>
    <button @click="toggleFavorate">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone: </strong>{{ phoneNumber }}</li>
      <li><strong>Email: </strong>{{ emailAddress }}</li>
    </ul>
    <button @click="deleteFriend">Delete</button>
  </li>
</template>

<script>
export default {
  //PROP
  // props: [
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavorite'
  // ],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value === '1' || value === '0';
      // }
    },
  },

  emits: ["toggle-favorate", "delete-friend"],
  // emits: {
  //   "toggle-favorate": function(id) {
  //     if (id) {
  //       return true;
  //     }
  //     console.warn("id is missing!")
  //     return false;
  //   }
  // },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorate() {
      this.$emit("toggle-favorate", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    }
  },
};
</script>
