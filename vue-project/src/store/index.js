import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			totalPrice: 3000,
			guests: 1,
			morePluses: [],
			userInfo: {},
			cardInfo: {},
		}
	},

	mutations: {
		personRemover(state, newVal) {
			if (state.guests >= 2) {
				state.guests--
				state.totalPrice -= 3200
			}
		},

		adder(state) {
			try {
				if (
					localStorage.getItem('guests') != null &&
					localStorage.getItem('morePluses') != null
				) {
					state.guests = JSON.parse(localStorage.getItem('guests'))
					state.morePluses = JSON.parse(localStorage.getItem('morePluses'))
				} else {
					state.guests = 1
					state.morePluses = []
				}
			} catch (error) {
				state.guests = 1
				state.morePluses = []
			}
		},
	},
})
