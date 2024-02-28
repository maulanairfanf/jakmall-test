<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import TabContentDelivery from './components/TabContentDelivery.vue'
import TabContentPayment from './components/TabContentPayment.vue'
import Summary from './components/Summary.vue'
import { computed, ref } from 'vue'
import NavigationTab from './components/NavigationTab.vue'
import TabContentSuccess from './components/TabContentSuccess.vue'

const step = ref(3)
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

function handleBack(payload) {
	if (payload) {
		step.value = payload
	} else if (step.value !== 1) {
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
		<div
			class="flex flex_items_center"
			:class="getTitleButtonBack === '' && 'visibility_hidden'"
		>
			<button class="button_icon" @click="handleBack()">
				<ArrowLeftIcon class="icon" />
			</button>
			<p class="margin margin_left_10">{{ getTitleButtonBack }}</p>
		</div>
		<div class="flex flex_justify_between">
			<TabContentDelivery
				v-if="step === 1"
				@handle-dropshipping="handleDropshipping"
			/>
			<TabContentPayment
				v-if="step === 2"
				@handle-shipment="handleShipment"
				@handle-payment="handlePayment"
			/>
			<TabContentSuccess
				v-if="step === 3"
				:shipment="shipment"
				@handle-back="handleBack"
			/>
			<Summary
				@handle-next="handleNext"
				:isDropshipping="isDropshipping"
				:shipment="shipment"
				:step="step"
			/>
		</div>
	</div>
</template>

<style></style>
