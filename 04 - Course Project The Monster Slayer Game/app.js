function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      myHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logs: []
    };
  },
  watch: {
    myHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) this.winner = "draw";
      else if (value <= 0) this.winner = "monster";
    },
    monsterHealth(value) {
      if (value <= 0 && this.myHealth <= 0) this.winner = "draw";
      else if (value <= 0) this.winner = "player";
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth <= 0 ? 0 + "%" : this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.myHealth <= 0 ? 0 + "%" : this.myHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 != 0;
    },
  },
  methods: {
    attackMonsther() {
      if (this.currentRound % 3 != 0) this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("You", "attached", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.addLogMessage("Monster", "attached", attackValue);
      this.myHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("You", "special-attached", attackValue);
      this.attackPlayer();
    },
    healthPlayer() {
      this.currentRound++;
      const healtValue = getRandomValue(8, 20);
      const tempHealth = this.myHealth;
      this.myHealth = Math.min(100, this.myHealth + healtValue);
      this.addLogMessage("You", "healed", this.myHealth - tempHealth);
      this.attackPlayer();
    },
    resetGame() {
        this.myHealth = 100;
        this.monsterHealth = 100;
        this.currentRound = 0;
        this.winner = null;
        this.logs = [];
    },
    surrender() {
        this.winner = "monster";
    },
    addLogMessage(who, action, value) {
        this.logs.unshift({
            actionBy: who,
            actionType: action,
            actionValue: value
        });
    }
  },
});

app.mount("#game");
