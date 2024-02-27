<script setup>
import { CheckBadgeIcon, CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import HeaderTab from './HeaderTab.vue'
import { ref } from 'vue'

const emits = defineEmits(['handle-shipment', 'handle-payment'])

const shipment = ref({
	title: 'GO-SEND',
	price: '15,000',
})
const payment = ref({
	title: 'e-Wallet',
	description: '1,500,000 left',
})

const listShipment = ref([
	{
		title: 'GO-SEND',
		price: '15,000',
	},
	{
		title: 'JNE',
		price: '9,000',
	},
	{
		title: 'Personal Courier',
		price: '29,000',
	},
])

const listPayment = ref([
	{
		title: 'e-Wallet',
		description: '1,500,000 left',
	},
	{
		title: 'Bank Transfer',
		description: '',
	},
	{
		title: 'Virtual Account',
		description: '',
	},
])

function handleChooseShipment(payload) {
	if (payload !== shipment.value) shipment.value = payload
	emits('handle-shipment', payload)
}

function handleChoosePayment(payload) {
	if (payload !== payment.value) payment.value = payload
	emits('handle-payment', payload)
}
</script>
<template>
	<div class="flex flex_column">
		<div class="shipment">
			<HeaderTab title="Shipment" />
			<div class="flex shipment_content">
				<div
					v-for="(item, index) in listShipment"
					:key="index"
					class="flex shipment_content_box"
					:class="
						shipment.title === item.title && 'shipment_content_box_active '
					"
					@click="handleChooseShipment(item)"
				>
					<div class="flex flex_column">
						<span>{{ item.title }} </span>
						<b>{{ item.price }}</b>
					</div>
					<div>
						<CheckIcon
							class="icon mini_icon"
							:class="
								shipment.title === item.title ? 'text_success ' : 'display_none'
							"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="payment">
			<HeaderTab title="Payment " />
			<div class="flex payment_content">
				<div
					v-for="(item, index) in listPayment"
					:key="index"
					class="flex payment_content_box"
					:class="payment.title === item.title && 'payment_content_box_active '"
					@click="handleChoosePayment(item)"
				>
					<div class="flex flex_column">
						<span>{{ item.title }} </span>
						<b>{{ item.description }}</b>
					</div>
					<div>
						<CheckIcon
							class="icon mini_icon"
							:class="
								payment.title === item.title ? 'text_success ' : 'display_none'
							"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
