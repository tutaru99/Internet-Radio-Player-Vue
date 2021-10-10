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
    likedStations: {}
  },
  mutations: {
    volumeSlider(state, value) {
      state.volume = value;
    },
    saveLikedStation(state, station) {
      state.likedStations[station.id] = station;
    },
    removeLikedStation(state, station) {
      delete state.likedStations[station.id];
    }
  },
  actions: {},
  plugins: [vuexLocal.plugin],
  modules: {},
});
