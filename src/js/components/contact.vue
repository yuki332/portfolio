<template>
	<div class="this">
		<p>Would you like working with me? Sure!! Contact me ;)</p>
		<p>Email: yarai.332@gmail.com</p>
		<p>Phone: +1 (385) 207-4328</p>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				message: 'hello'
			}
		},
		props: {
			name: {
				name: 'from html'
			}
		},
		methods: {
            alert() {
                alert('alert!');
            },
            log() {
                console.log('can you see?');
            },
        }
	}
</script>
<style>
</style>