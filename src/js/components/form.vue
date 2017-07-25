<template>
	<form method="POST" action="/">
		<div class="input_area">
			<input type="email" name="email" placeholder="Your Email">
		</div>
		<div class="input_area">
			<input type="text" name="subject" placeholder="Subject">			
		</div>
		<div class="input_area">
			<textarea name="contents" rows="10" placeholder="Message me!!"></textarea>
		</div>
		<button>Send</button>
	</form>
</template>
<script>
	export default{
		data() {
			return {
				message: 'hello'
			}
		}
	}
</script>
<style>
	.input_area{
		margin-bottom:1rem;
	}
	.input_area input,
	.input_area textarea{
		border: 1px solid #7e7d7d;
		border-radius: 5px;
		padding: .2rem 1rem;
		width: 100%;
		box-sizing: border-box;
	}
	button{
		width: 100%;
		border: 1px solid #5186d2;
		border-radius: 5px;
		background: #5186d2;
		color: #fff;
		padding: .5rem;
	}
</style>