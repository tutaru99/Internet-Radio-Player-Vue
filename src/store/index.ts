import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    volume: 1,
  },
  mutations: {
    volumeSlider(state, value) {
      state.volume = value;
    },
  },
  actions: {},
  plugins: [vuexLocal.plugin],
  modules: {},
});
