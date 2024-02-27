<script setup>
defineProps({
	title: {
		type: String,
		required: true,
		default: '',
	},
})
</script>
<template>
	<h1 class="text_primary">
		{{ title }}
		<div class="underline"></div>
	</h1>
</template>
