export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    console.log(data.areas);
    const newCoach = {
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.desc,
      hourlyRate: data.rate,
    };

    const response = await fetch(
      `https://coachfinder-8e964-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(newCoach),
      }
    );

    const responseData = await response.json();

    if (!responseData.ok) {
      // error ...
    }

    context.commit("registerCoach", {
      ...newCoach,
      id: userId,
    });
  },
  
  async loadCoaches(context) {
    const userId = context.rootGetters.userId;
    const response = await fetch(`https://coachfinder-8e964-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`);
    const responseData = await response.json();
    if (!response.ok) {
      // ...
    }
    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
      }
      coaches.push(coach);
    }
    context.commit('setCoaches', coaches);
  },
};
