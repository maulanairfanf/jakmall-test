<script setup>
import { CheckBadgeIcon } from '@heroicons/vue/24/solid'
</script>
<template>
	<div class="section_left">
		<div class="flex flex_justify_between flex_items_center w_100">
			<h1 class="text_primary">
				Delivery Details
				<div class="underline"></div>
			</h1>
			<div class="flex flex_items_center px_10">
				<button class="button_icon">
					<CheckBadgeIcon class="icon" />
				</button>
				<p class="margin_left_10">Send a dropshipper</p>
			</div>
		</div>
		<div class="flex flex_justify_between w-100">
			<div class="px-10">
				<div class="flex flex_column">
					<input class="input_container" placeholder="Email" />
					<input class="input_container" placeholder="Phone Number" />
					<textarea class="input_container" placeholder="Delivery Address" />
				</div>
			</div>
			<div class="px-10">
				<div class="flex flex_column">
					<input class="input_container" placeholder="Dropshipper name" />
					<input
						class="input_container"
						placeholder="Dropshipper phone number"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
