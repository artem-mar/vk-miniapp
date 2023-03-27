import { createStore } from 'vuex'
import { eventsModule } from './eventsModule'
import { winnersModule } from './winnersModule'

export default createStore({
  modules: {
    events: eventsModule,
    winners: winnersModule
  }
})
