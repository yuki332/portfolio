<template>
	<div class="this">
		<slot></slot>
	</div>
</template>
<script>
	export default{
		data() {
			return {
			}
		}
	}
</script>
<style>
	.this{
		color: red;
		margin-bottom: 10px;
		background: #ccc;
		padding: 2rem;
	}
</style>
