<template>
	<div class="container" :style="{ 'background' : 'url(' + background + ')'}">
		<h2>{{ title | capitalize }}</h2>
		<div class="contents">
			<slot></slot>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				message: 'hello'
			}
		},
		props: ['title', 'background'],
		filters: {
			capitalize: function(obj){
				if(!obj) return '';
				obj = obj.toString().toUpperCase();
				return obj;
			}
		}
	}
</script>
<style>
	h2{
		text-align: center;
		padding: 3rem;
	}
	.container{
		background-repeat: no-repeat !important;
		background-size: cover !important;
		background-attachment: fixed !important;
		margin-bottom: 5rem;
	}
	.contents{
		display:flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
</style>