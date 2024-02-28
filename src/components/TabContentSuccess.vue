<script setup>
import { computed } from 'vue'
import HeaderTab from './HeaderTab.vue'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
	shipment: {
		type: Object,
		required: true,
	},
})
const emits = defineEmits(['handle-back'])

const generateRandomAlphanumeric = computed(() => {
	// Karakter alphanumeric yang diizinkan
	const alphanumericChars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

	// Menghasilkan string acak dengan panjang 5
	let randomString = ''
	for (let i = 0; i < 5; i++) {
		const randomIndex = Math.floor(Math.random() * alphanumericChars.length)
		randomString += alphanumericChars.charAt(randomIndex)
	}

	return randomString
})
</script>

<template>
	<div class="section_left flex flex_justify_center flex_items_center">
		<div>
			<HeaderTab title="Thank You" />
			<div class="margin_top_30">
				<b>Order ID : {{ generateRandomAlphanumeric }}</b>
				<p>You order will be delivered today with {{ shipment.title }}</p>
			</div>
			<div class="flex flex_items_center">
				<button class="button_icon" @click="emits('handle-back', 1)">
					<ArrowLeftIcon class="icon" />
				</button>
				<p class="margin margin_left_10">Go to homepage</p>
			</div>
		</div>
	</div>
</template>
