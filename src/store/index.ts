import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    board: {},
    boards: [],
    user: {},
  },
  mutations: {
    UPDATE_BOARDS(state, boards) {
      state.boards = boards;
    },
  },
  getters: {
    boards: (state) => state.boards,
  },
  actions: {
    async getBoards({ commit }) {
      const { data: { boards } } = await api.get('/board'); // не забудьте импортировать api!
      commit('UPDATE_BOARDS', boards);
    },
  },
  modules: {
  },
});
