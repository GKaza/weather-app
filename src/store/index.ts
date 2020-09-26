import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: [] as any,
    URLs: [
      "http://api.openweathermap.org/data/2.5/weather?id=2643743&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=2968815&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=5368361&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=2759794&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=3169070&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=3117735&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=1850147&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=1816670&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
      "http://api.openweathermap.org/data/2.5/weather?id=3451190&units=metric&APPID=d86265c8d6a106614454e5d281e8bf99",
    ],
  },
  mutations: {
    SAVE_CITY(state, payload) {
      state.cities.push(payload)
    },
    // SAVE_CITY mutation is used to push a city's data into our cities array 
    CLEAR_CITIES(state) {
      state.cities = [] as any
    }
    // CLEAR_CITIES makes sure our cities array is empty
  },
  actions: {
    async loadCities({ commit }) {
      commit("CLEAR_CITIES")
      await this.state.URLs.forEach((url) =>
        fetch(url)
          .then((response) => response.json())
          .then((result) => { commit('SAVE_CITY', result) })
      );
    }
    // loadCities action makes GET requests to our URLs and pushes each response to the cities array
  },
  getters: {
    cities(state) {
      return state.cities
    },
    coldCities(state) {
      return state.cities.filter((city: { main: { temp: number } }) => {
        return city.main.temp < 20;
      })
    }
    // we filter the original array so that we only get the cities with a temperature lower than 20 degrees 
    ,
    warmCities(state) {
      return state.cities.filter((city: { main: { temp: number } }) => {
        return city.main.temp > 20;
      })
    }
    // we filter again for the cities over 20 degrees
  },
  modules: {
  }
})
