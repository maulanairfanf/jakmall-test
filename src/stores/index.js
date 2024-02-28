import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
	state: () => ({
		isDisableButtonSummary: true,
		isDropshipping: false,
		shipment: {
			title: 'GO-SEND',
			price: '15,000',
		},
		payment: {
			title: 'e-Wallet',
			description: '1,500,000 left',
		},
		step: 1,
		email: '',
		phoneNumber: '',
		dropshipperName: '',
		dropshipperNumber: '',
		address: '',
		isLoadingStore: true,
	}),
	actions: {
		getStorage() {
			const stringfyData = localStorage.getItem('store')
			const data = JSON.parse(stringfyData)
			for (const property in data) {
				this[property] = data[property]
			}
			this.isLoadingStore = false
		},

		setStorage() {
			localStorage.setItem('store', JSON.stringify(this))
		},

		resetStorage() {
			localStorage.removeItem('store')
			this.getStorage()
		},

		handleBack(payload) {
			if (payload) {
				this.step = payload
			} else if (this.step !== 1) {
				this.step--
			}
		},

		handleNext() {
			if (this.step !== 3) {
				this.step++
			}
		},
	},
})
