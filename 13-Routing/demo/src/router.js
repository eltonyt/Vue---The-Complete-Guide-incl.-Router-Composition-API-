import { createRouter, createWebHistory } from 'vue-router';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamFooter.vue';
import UsersFooter from './components/users/UserFooter.vue';

const router = createRouter({
    // supports browser history settings
    history: createWebHistory(),
    // routes configuration
    routes: [
      { path: '/', redirect: '/teams' },
      {
        name: 'teams',
        path: '/teams',
        // component: TeamsList,
        components: { default: TeamsList, footer: TeamsFooter },
        children: [
          { name: 'team-members', path: ':teamId', component: TeamMembers }, // dynamic route with parameter
        ],
      }, // our-domain.com/teams => TeamsList
      {
        path: '/users',
        components: { default: UsersList, footer: UsersFooter },
        meta: { needAuth: true },
        beforeEnter(to, from, next) {
          console.log('user beforeEnter');
          console.log(to, from);
          next();
        },
      }, // our-domain.com/teams => UsersList
      // { path: '/teams/new', component: TeamsList }, // new team
      { path: '/:notFound(.*)', component: NotFound }, // NOT FOUND
    ],
    linkActiveClass: 'router-link-active',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      return { left: 0, top: 0 };
    },
  });
  
  router.beforeEach(function (to, from, next) {
    console.log(to, from);
    // if (to.name == 'team-members') {
    //   next();
    // } else {
    //   next({ name: 'team-members', params: { teamId: 't2' } });
    // }
    next();
  });
  
  router.afterEach(function (to, from) {
    console.log('After Each Global');
    console.log(to, from);
  });
  
  export default router;