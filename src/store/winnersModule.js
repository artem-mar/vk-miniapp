import { getWinners } from "../data/api"

const hideString = (string, length = 4) => string.slice(-length).padStart(length + 4, '*');
const hideEmail = (email) => {
  const [name, domain] = email.split('@');
  const hideName = hideString(name, 4);
  return [hideName, domain].join('@');
};

export const winnersModule = {
  state: () => ({
    winners: []
  }),
  getters: {
    getAllWinners(state) {
      return state.winners
    },
    getWinnersWithHideFields(state) {
      return state.winners.map((winner) => ({
        ...winner,
        email: hideEmail(winner.email),
        phone: `${winner.phone.slice(0, 2)} ${hideString(winner.phone)}`,
      }))
    }
  },
  mutations: {
    setWinners(state, winners) {
      state.winners = winners;
    }
  },
  actions: {
    async fetchWinners({ commit }) {
      const winners = await getWinners()
      commit('setWinners', winners)
    }
  }
}
