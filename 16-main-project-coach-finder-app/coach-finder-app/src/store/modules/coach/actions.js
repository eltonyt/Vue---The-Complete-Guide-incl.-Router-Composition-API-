export default {
  registerCoach(context, data) {
    const newCoach = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      areas: data.areas,
      description: data.description,
      hourlyRate: data.rate,
    };
    context.commit("registerCoach", newCoach);
  },
};
