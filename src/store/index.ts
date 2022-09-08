import { createStore } from 'vuex'
import axios from 'axios';

const url = "https://floating-sierra-20135.herokuapp.com/api/movies";

export default createStore({
  state: {
    allFilms: [],
    activeFilm: [],
    loadStatus: true,
  },
  getters: {
    getAllFilm(state) {
      return state.allFilms;
    },
    getActiveFilm(state) {
      return state.activeFilm;
    },
    getLoaderStatus(state) {
      return state.loadStatus;
    },
  },
  mutations: {
    updateAllFilm(state, films){
      state.allFilms = films;
    },
    updateLoadStatus(state) {
      state.loadStatus = false;
    },
    updateActiveFilm(state, item3){
      state.activeFilm =item3;
    },
  },
  actions: {
    async fetchFilm(ctx){
      axios
        .get(url)
        .then(response => {
          ctx.commit("updateAllFilm", response.data.data)
          ctx.commit("updateLoadStatus")
        })
        .catch(error => console.log(error));
    },
    SortArrayFilms(ctx, arr) {
      ctx.commit("updateAllFilm", arr)
    },
    updateActiveFilm(ctx, item) {
      ctx.commit("updateActiveFilm", item)
    },
  },
  modules: {
  }
})
