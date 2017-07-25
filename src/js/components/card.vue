<template>
	<div class="card">
		<a href="">
			<img v-bind:src="img" :alt="title">
		</a>
		<h3 class="title">{{ title }}</h3>
		<slot></slot>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				message: 'hello'
			}
		},
		props: ['img', 'title']
	}
</script>
<style>
	img{
		display: block;
		width: 100%;
		height: auto;
	}
	p{
		padding: 1rem;
		margin: 0;
		line-height: 1.4rem;
	}
	a{
		display: block;
		width: 100%;
		height: auto;
		padding: 0;
	}
	.title{
		text-align: center;
		margin: 0;
		margin-top: 1rem;
	}
	.card{
		overflow: hidden;
		margin-bottom: 2rem;
		transition: all 0.5s;
		width: 26vw;
		padding-bottom: 1rem;
	}
	.card:hover{
		box-shadow: 0 0 10px 3px #aaa;
		transition: all 0.4s
	}
</style>