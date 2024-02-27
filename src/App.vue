<script setup>
import { ArrowLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import TabContent from './components/TabContent.vue'
import Summary from './components/Summary.vue'
</script>

<template>
	<div class="flex flex_justify_center">
		<div class="header_navigation flex flex_justify_center flex-items-center">
			<div class="flex flex-items-center margin_right_10">
				<div class="circle_navigation margin_right_10">
					<span>1</span>
				</div>
				<span class="text_primary margin_right_10">Delivery</span>
				<ChevronRightIcon class="text_primary icon" />
			</div>
			<div class="flex flex-items-center margin_right_10">
				<div class="circle_navigation margin_right_10">
					<span>2</span>
				</div>
				<span class="text_primary margin_right_10">Delivery</span>
				<ChevronRightIcon class="text_primary icon" />
			</div>
			<div class="flex flex-items-center margin_right_10">
				<div class="circle_navigation margin_right_10">
					<span>3</span>
				</div>
				<span class="text_primary margin_right_10">Delivery</span>
			</div>
		</div>
	</div>
	<div class="box rounded">
		<div class="flex flex_items_center">
			<button class="button_icon">
				<ArrowLeftIcon class="icon" />
			</button>
			<p class="margin margin_left_10">Back to cart</p>
		</div>
		<div class="flex flex_justify_between">
			<TabContent />
			<Summary />
		</div>
	</div>
</template>

<style></style>
