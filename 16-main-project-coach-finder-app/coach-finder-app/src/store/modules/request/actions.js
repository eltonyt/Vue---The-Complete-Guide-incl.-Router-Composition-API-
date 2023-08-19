export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString,
      userEmail: payload.userEmail,
      message: payload.message,
      coachId: payload.coachId,
    };
    context.commit("addRequest", newRequest);
  },
};
