import { createStore, createLogger } from 'vuex';
const env = process.env.NODE_ENV;
const store = createStore({
    state: {
        x: 0,
        y: 10
    },
    mutations: {
        changeX(state, payload = 1) {
            state.x += +payload;
        },
        changeY(state, payload = 1) {
            state.y -= +payload;
        }
    },
    actions: {
        changeYAsync({ commit }, payload) {
            setTimeout(() => {
                commit('changeY', payload);
            }, 1000);
        }
    },
    plugins: env === "production" ? [] : [createLogger()]
});
export default store;