<template>
	<a :href="href">
		{{ name|capitalize }}
	</a>
</template>
<script>
	export default{
		data() {
			return {
				message: 'hello'
			}
		},
		props: ['name', 'href'],
		filters:{
			capitalize: function(obj){
				if(!obj) return '';
				obj = obj.toString();
				return obj.toUpperCase();
			}
		}
	}
</script>
<style>
	a{
		text-decoration: none;
		color: #666;
		display:block;
		transition: color 0.4s;
		padding: 1rem;
		text-align: center;
	}
	a:hover{
		color: #eee;
		transition: color 0.4s;
	}
</style>