<template>
	<div class="mainvis">
		<div class="message">
			<h2 class="header_title">Hi, I'm Yuki Arai</h2>
			<p>Full-Stack Web Developer / Designer</p>
			<p>I love elegant and clean code.</p>
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
		props: ['img']
	}
</script>
<style>
	.mainvis{
		width: 100vw;
		height:100vh;
		background: url('/img/main.jpg') no-repeat center center fixed;
		background-size: cover;
		position: relative;
		margin-bottom: 5rem;
	}
	.header_title{
		padding: 0;
		text-align: left;
	}
	.message{
		position:absolute;
		left: 5rem;
		top: 20vh;
		font-size: 2rem;
		color:#fff;
		text-shadow: 1px 1px #666;
	}
</style>