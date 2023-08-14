import {createStore} from 'vuex';
import coachModule from './modules/coach/index.js'

const store = createStore({
    modules: {
        coach: coachModule,
    }
});

export default store;