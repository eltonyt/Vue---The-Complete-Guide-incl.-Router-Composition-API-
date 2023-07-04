const app = Vue.createApp({
  data: function () {
    return {
      myName: "Elton",
      myAge: 29,
	  imgURL: 'https://m.media-amazon.com/images/I/71VlSL8pqgL._AC_SL1500_.jpg',
    };
  },
  methods: {
    randomNum() {
      return Math.random();
    },
    myAgeAfterFiveYears() {
      return this.myAge + 5;
    },
  },
});

app.mount("#assignment");
