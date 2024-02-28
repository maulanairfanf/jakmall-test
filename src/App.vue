<script setup>
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'
import TabContentDelivery from './components/TabContentDelivery.vue'
import TabContentPayment from './components/TabContentPayment.vue'
import Summary from './components/Summary.vue'
import { computed, onMounted, ref, watch } from 'vue'
import NavigationTab from './components/NavigationTab.vue'
import TabContentSuccess from './components/TabContentSuccess.vue'
import { useStore } from './stores/index'

const store = useStore()
const { setStorage, getStorage, resetStorage, handleBack } = store

const getTitleButtonBack = computed(() => {
	if (store.step === 1) {
		return 'Back to cart'
	} else if (store.step === 2) {
		return 'Back to delivery'
	} else {
		return ''
	}
})

onMounted(() => {
	getStorage()
})

watch(store, val => {
	if (val) {
		setStorage()
	}
	if (val.step === 3) {
		resetStorage()
	}
})
</script>

<template>
	<div v-if="store.isLoadingStore">...</div>
	<div v-else>
		<NavigationTab :step="store.step" />
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
				<TabContentDelivery v-if="store.step === 1" />
				<TabContentPayment v-if="store.step === 2" />
				<TabContentSuccess v-if="store.step === 3" />
				<Summary />
			</div>
		</div>
	</div>
</template>

<style></style>
