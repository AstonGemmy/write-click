import { createStore } from 'vuex'

const store = createStore({
    state: {
        isLoading: false,
        overlay: false,
        confirmation_modal: {
            show: false,
            source: null,
            triggered: null,
            heading: null,
            message: null,
            action: null,
            closeable: false,
        }
    },
    getters: {},
    mutations: {
        setLoader(state, val) {
            state.isLoading = val;
        },
        setOverlay(state, val) {
            state.overlay = false
            state.overlay = val
        },   
        setModal(state, val) {
            state.confirmation_modal.show = false,
            state.confirmation_modal.show = val
        }
    },
    actions: {
        // Displays confirmation modal      
        showModal(context) {
            context.commit('setModal', true)
            context.commit('setOverlay', true)
        },
        // Removes confirmation modal
        closeModal(context) {
            context.commit('setModal', false)
            context.commit('setLoader', false)
            this.state.confirmation_modal.can_close = false
            context.commit('setOverlay', false)
        },
    }
})

export default store;