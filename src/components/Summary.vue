<script setup>
import { computed } from 'vue'
import { useStore } from '../stores'

const store = useStore()
const { handleNext } = store

const getEstimateTime = computed(() => {
	if (store.shipment.title === 'GO-SEND') {
		return 'today'
	} else if (store.shipment.title === 'JNE') {
		return '2 days'
	} else if (store.shipment.title === 'Personal Courier') {
		return '1 day'
	} else {
		return ''
	}
})

const getTitleButton = computed(() => {
	if (store.shipment.title) {
		return `Pay with ${store.shipment.title}`
	} else {
		return 'Continue to Payment'
	}
})
</script>
<template>
	<div class="section_right w-100 flex flex_column flex_column_justify_between">
		<div>
			<h1>
				<b class="text_primary">Summary</b>
			</h1>
			<span class="">10 items purchased</span>
			<div v-if="store.shipment.title && store.step > 1">
				<div class="underline_mini"></div>
				<div class="flex flex_column">
					<b>Delivery estimation</b>
					<b class="text_success"
						>{{ getEstimateTime }} {{ store.shipment.title }}</b
					>
				</div>
			</div>
			<div v-if="store.payment.title && store.step > 1">
				<div class="underline_mini"></div>
				<div class="flex flex_column">
					<b>Payment Method</b>
					<b class="text_success">{{ store.payment.title }}</b>
				</div>
			</div>
		</div>
		<div>
			<div class="flex flex_justify_between flex_items_center margin_top_10">
				<span>Cost of goods</span>
				<b>500,000</b>
			</div>
			<div
				class="flex flex_justify_between flex_items_center margin_top_10"
				v-if="store.isDropshipping"
			>
				<span>Dropshipping Fee</span>
				<b>5,900</b>
			</div>
			<div
				class="flex flex_justify_between flex_items_center margin_top_10"
				v-if="store.shipment.title && store.step > 1"
			>
				<span
					><b>
						{{ store.shipment.title }}
					</b>
					shipment</span
				>
				<b>{{ store.shipment.price }}</b>
			</div>
			<div class="flex flex_justify_between flex_items_center margin_top_10">
				<h1 class="text_primary">Total</h1>
				<h1 class="text_primary">505,900</h1>
			</div>
			<div class="flex flex_justify_center" v-if="store.step !== 3">
				<button
					class="button_payment"
					@click="handleNext()"
					:disabled="store.isDisableButtonSummary"
				>
					{{ getTitleButton }}
				</button>
			</div>
		</div>
	</div>
</template>
