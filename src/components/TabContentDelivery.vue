<script setup>
import { CheckBadgeIcon, CheckIcon, XMarkIcon } from '@heroicons/vue/24/solid'
import { computed, ref, watch } from 'vue'
import HeaderTab from './HeaderTab.vue'

const email = ref('')
const phoneNumber = ref('')
const address = ref('')
const dropshipperName = ref('')
const dropshipperNumber = ref('')
const isDropshipping = ref(false)
const regexPhoneNumber = ref(/^[0-9\-\+\(\)]{6,20}$/)
const regexEmail = ref(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
const emits = defineEmits(['handle-dropshipping'])

const checkEmail = computed(() => {
	if (regexEmail.value.test(email.value)) {
		return true
	} else {
		return false
	}
})

const checkPhoneNumber = computed(() => {
	if (regexPhoneNumber.value.test(phoneNumber.value)) {
		return true
	} else {
		return false
	}
})

const checkDropshipperNumber = computed(() => {
	if (regexPhoneNumber.value.test(dropshipperNumber.value)) {
		return true
	} else {
		return false
	}
})

const checkAddress = computed(() => {
	if (address.value.length === 0) {
		return false
	}
	return true
})

function handleDropShipper() {
	isDropshipping.value = !isDropshipping.value
	emits('handle-dropshipping', isDropshipping.value)
}
</script>
<template>
	<div class="section_left">
		<div class="flex flex_justify_between flex_items_center w_100">
			<HeaderTab title="Delivery Details" />
			<div class="flex flex_items_center px_10">
				<button class="button_icon" @click="handleDropShipper">
					<CheckBadgeIcon
						class="icon"
						:class="isDropshipping && 'text_success'"
					/>
				</button>
				<p class="margin_left_10">Send a dropshipper</p>
			</div>
		</div>
		<div class="flex flex_justify_between w-100">
			<div class="px-10">
				<div class="flex flex_column">
					<div class="flex flex_items_center flex_justify_end">
						<input
							v-model="email"
							class="input_container"
							placeholder="Email"
							:class="
								email === ''
									? ''
									: checkEmail
									? 'input_container_success'
									: 'input_container_primary'
							"
						/>
						<XMarkIcon
							v-if="!checkEmail"
							class="icon icon_mini icon_mini_absolute text_primary"
							:class="email === '' && 'display_none'"
						/>
						<CheckIcon
							v-else
							class="icon icon_mini icon_mini_absolute text_success"
							:class="email === '' && 'display_none'"
						/>
					</div>
					<div class="flex flex_items_center flex_justify_end">
						<input
							v-model="phoneNumber"
							class="input_container"
							placeholder="Phone Number"
							:class="
								phoneNumber === ''
									? ''
									: checkPhoneNumber
									? 'input_container_success'
									: 'input_container_primary'
							"
						/>
						<XMarkIcon
							v-if="!checkPhoneNumber"
							class="icon icon_mini icon_mini_absolute text_primary"
							:class="phoneNumber === '' && 'display_none'"
						/>
						<CheckIcon
							v-else
							class="icon icon_mini icon_mini_absolute text_success"
							:class="phoneNumber === '' && 'display_none'"
						/>
					</div>
					<textarea
						v-model="address"
						maxlength="120"
						class="input_container"
						placeholder="Delivery Address"
						@keypress="handleInputAddress"
						:class="!checkAddress && 'input_container_primary'"
					/>
					<span>{{ 120 - address.length }}</span>
				</div>
			</div>
			<div class="px-10">
				<div class="flex flex_column">
					<input
						v-model="dropshipperName"
						class="input_container"
						placeholder="Dropshipper name"
					/>
					<div class="flex flex_items_center flex_justify_end">
						<input
							v-model="dropshipperNumber"
							class="input_container"
							placeholder="Dropshiper phone number"
							:class="
								dropshipperNumber === ''
									? ''
									: checkDropshipperNumber
									? 'input_container_success'
									: 'input_container_primary'
							"
						/>
						<XMarkIcon
							v-if="!checkDropshipperNumber"
							class="icon icon_mini icon_mini_absolute text_primary"
							:class="dropshipperNumber === '' && 'display_none'"
						/>
						<CheckIcon
							v-else
							class="icon icon_mini icon_mini_absolute text_success"
							:class="dropshipperNumber === '' && 'display_none'"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
