<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
import HeaderTab from './HeaderTab.vue'
import { ref } from 'vue'
import { useStore } from '../stores'

const store = useStore()

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
	if (payload !== store.shipment) store.shipment = payload
}

function handleChoosePayment(payload) {
	if (payload !== store.payment) store.payment = payload
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
						store.shipment.title === item.title &&
						'shipment_content_box_active '
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
								store.shipment.title === item.title
									? 'text_success '
									: 'display_none'
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
					:class="
						store.payment.title === item.title && 'payment_content_box_active '
					"
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
								store.payment.title === item.title
									? 'text_success '
									: 'display_none'
							"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
