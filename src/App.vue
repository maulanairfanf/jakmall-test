<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import TabContentDelivery from './components/TabContentDelivery.vue'
import TabContentPayment from './components/TabContentPayment.vue'
import Summary from './components/Summary.vue'
import { computed, ref } from 'vue'
import NavigationTab from './components/NavigationTab.vue'

const step = ref(2)
const isDropshipping = ref(false)
const shipment = ref({
	title: 'GO-SEND',
	price: '15,000',
})
const payment = ref({
	title: 'e-Wallet',
	description: '1,500,000 left',
})
function handleDropshipping(payload) {
	isDropshipping.value = payload
}

function handleBack() {
	if (step.value !== 1) {
		step.value--
	}
}

function handleNext() {
	if (step.value !== 3) {
		step.value++
	}
}

function handlePayment(payload) {
	payment.value = payload
}

function handleShipment(payload) {
	shipment.value = payload
}

const getTitleButtonBack = computed(() => {
	if (step.value === 1) {
		return 'Back to cart'
	} else if (step.value === 2) {
		return 'Back to delivery'
	} else {
		return ''
	}
})
</script>

<template>
	<NavigationTab :step="step" />
	<div class="box rounded">
		<div class="flex flex_items_center">
			<button class="button_icon" @click="handleBack()">
				<ArrowLeftIcon class="icon" />
			</button>
			<p class="margin margin_left_10">{{ getTitleButtonBack }}</p>
		</div>
		<div class="flex flex_justify_between">
			<TabContentDelivery
				@handle-dropshipping="handleDropshipping"
				v-if="step === 1"
			/>
			<TabContentPayment
				@handle-shipment="handleShipment"
				@handle-payment="handlePayment"
				v-if="step === 2"
			/>
			<Summary
				@handle-next="handleNext"
				:isDropshipping="isDropshipping"
				:shipment="shipment"
			/>
		</div>
	</div>
</template>

<style></style>
