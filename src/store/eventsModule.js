import { getEvents } from '../data/api'

export const eventsModule = {
  state: () => ({
    events: []
  }),
  getters: {
    getEvents(state) {
      return state.events
    }
  },
  mutations: {
    setEvents(state, events) {
      state.events = events
    }
  },
  actions: {
    async fetchEvents({ commit }) {
      const events = await getEvents()
      commit('setEvents', events)
    }
  }
}
