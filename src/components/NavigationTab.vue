<script setup>
import { ChevronRightIcon } from '@heroicons/vue/24/solid'

defineProps({
	step: {
		default: 1,
		type: Number,
		required: true,
	},
})
</script>
<template>
	<div class="flex flex_justify_center">
		<div class="header_navigation flex flex_justify_center flex_items_center">
			<div class="flex flex_items_center tab">
				<div
					class="circle_navigation margin_right_10"
					:class="step >= 1 && 'circle_navigation_active'"
				>
					<span>1</span>
				</div>
				<span class="text_primary margin_right_10">Delivery</span>
				<ChevronRightIcon class="text_primary icon" />
			</div>
			<div class="flex flex_items_center tab">
				<div
					class="circle_navigation margin_right_10"
					:class="step >= 2 && 'circle_navigation_active'"
				>
					<span>2</span>
				</div>
				<span class="text_primary margin_right_10">Payment</span>
				<ChevronRightIcon class="text_primary icon" />
			</div>
			<div class="flex flex_items_center tab">
				<div
					class="circle_navigation margin_right_10"
					:class="step >= 3 && 'circle_navigation_active'"
				>
					<span>3</span>
				</div>
				<span class="text_primary margin_right_10">Finish</span>
			</div>
		</div>
	</div>
</template>
