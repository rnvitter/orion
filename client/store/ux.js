export const state = () => ({
  activeResource: null
})

export const mutations = {
  setActiveResource(state, id) {
    state.activeResource = id
  }
}

export const getters = {
  activeResource(state) {
    return state.activeResource
  }
}
