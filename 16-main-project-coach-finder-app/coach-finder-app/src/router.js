import { createRouter, createWebHistory } from "vue-router";

import CoachDetails from "./components/coach/CoachDetails.vue";
import CoachList from "./components/coach/CoachList.vue";
import CoachRegister from "./components/coach/CoachRegister.vue";
import ContactCoach from "./components/request/ContactCoach.vue";
import RequestList from "./components/request/RequestList.vue";
import ErrorPage from "./components/utils/ErrorPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachList },
    {
      path: "/coaches/:id",
      component: CoachDetails,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegister },
    { path: "/requests", component: RequestList },
    { path: "/:notFound(.*)", component: ErrorPage },
  ],
});

export default router;
