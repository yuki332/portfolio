<template>
	<div class="topnav">
		<item name="home"></item>
		<item name="portfolio" href='#portfolio'></item>
		<item name="skills" href="#skills"></item>
	</div>
</template>
<script>
	import item from './nav-item.vue'
	export default{
		components:{
			item
		},
		data() {
			return {
				message: 'hello'
			}
        }
	}
</script>
<style>
	.topnav{
		display: flex;
		justify-content: space-between;
		padding: 1rem 0;
	}
</style>