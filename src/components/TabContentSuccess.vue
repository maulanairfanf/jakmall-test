<script setup>
import { computed } from 'vue'
import HeaderTab from './HeaderTab.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import { useStore } from '../stores'

const store = useStore()
const { handleBack, resetStorage, resetState } = store

const generateRandomAlphanumeric = computed(() => {
	const alphanumericChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

	let randomString = ''
	for (let i = 0; i < 5; i++) {
		const randomIndex = Math.floor(Math.random() * alphanumericChars.length)
		randomString += alphanumericChars.charAt(randomIndex)
	}

	return randomString
})

function goFirstStep() {
	handleBack(1)
	store.$reset()
	resetStorage()
}
</script>

<template>
	<div class="section_left flex flex_justify_center flex_items_center">
		<div>
			<HeaderTab title="Thank You" />
			<div class="margin_top_30">
				<b>Order ID : {{ generateRandomAlphanumeric }}</b>
				<p>You order will be delivered today with {{ store.shipment.title }}</p>
			</div>
			<div class="flex flex_items_center">
				<button class="button_icon" @click="goFirstStep()">
					<ArrowLeftIcon class="icon" />
				</button>
				<p class="margin margin_left_10">Go to homepage</p>
			</div>
		</div>
	</div>
</template>
