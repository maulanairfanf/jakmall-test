<script setup>
import { computed } from 'vue'

const props = defineProps({
	isDropshipping: {
		type: Boolean,
		required: true,
		default: false,
	},
	shipment: {
		type: Object,
		required: true,
	},
})

const emits = defineEmits(['handle-next'])

const getEstimateTime = computed(() => {
	if (props.shipment.title === 'GO-SEND') {
		return 'today'
	} else if (props.shipment.title === 'JNE') {
		return '2 days'
	} else if (props.shipment.title === 'Personal Courier') {
		return '1 day'
	} else {
		return ''
	}
})

const getTitleButton = computed(() => {
	if (props.shipment) {
		return `Pay with ${props.shipment.title}`
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
			<div class="underline_mini"></div>
			<div class="flex flex_column" v-if="shipment">
				<b>Delivery estimation</b>
				<span class="text_success"
					>{{ getEstimateTime }} {{ shipment.title }}</span
				>
			</div>
		</div>
		<div>
			<div class="flex flex_justify_between flex_items_center margin_top_10">
				<span>Cost of goods</span>
				<b>500,000</b>
			</div>
			<div
				class="flex flex_justify_between flex_items_center margin_top_10"
				v-if="isDropshipping"
			>
				<span>Dropshipping Fee</span>
				<b>5,900</b>
			</div>
			<div
				class="flex flex_justify_between flex_items_center margin_top_10"
				v-if="shipment"
			>
				<span>{{ shipment.title }} shipment</span>
				<b>{{ shipment.price }}</b>
			</div>
			<div class="flex flex_justify_between flex_items_center margin_top_10">
				<h1 class="text_primary">Total</h1>
				<h1 class="text_primary">505,900</h1>
			</div>
			<div class="flex flex_justify_center" v-if="step !== 3">
				<button class="button_payment" @click="emits('handle-next')">
					{{ getTitleButton }}
				</button>
			</div>
		</div>
	</div>
</template>
