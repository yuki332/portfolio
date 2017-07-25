<template>
	<div>
		<topnav></topnav>
		<eyecat img="/img/main.JPG"></eyecat>
		<container title="portfolio" id="portfolio">
			<card img="https://dummyimage.com/300x300/000/fff" title="RAGS to Raches">
				<p>
					RAGS TO RACHES is one of the fast growing baby cloth companies in Utah. The online store is running by using popular eCommerce Platform Shopify.
				</p>
			</card>
			<card img="https://dummyimage.com/300x300/000/fff" title="Personal Import">
				<p>
					Personal Import.info is marketing purpose website. By updating the site, PV increases 43% and traffic increases nearly 50%.
				</p>
				<p>
					*The website is in Japanese.
				</p>
			</card>
			<card img="https://dummyimage.com/300x300/000/fff" title="STYZ">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa architecto, aut porro voluptatum obcaecati cum veritatis, distinctio in autem explicabo repellendus itaque nobis saepe beatae ipsam voluptate facere deserunt, maiores!
				</p>
			</card>
		</container>
		<container title="Let's Contact" background="/img/main.JPG">
			<contact></contact>
		</container>
		<container title="skills" id="skills">
			<card img="https://dummyimage.com/300x300/000/fff" title="HTML 5">
				<ul>
					<li>Pug(Jade)</li>
					<li>liquid</li>
				</ul>
			</card>
			<card img="https://dummyimage.com/300x300/000/fff" title="CSS 3">
				<ul>
					<li>SASS</li>
					<li>SCSS</li>
					<li>Stylus</li>
				</ul>
			</card>
			<card img="https://dummyimage.com/300x300/000/fff" title="JavaScript">
				<ul>
					<li>Vue.js</li>
				</ul>
			</card>
			<card img="https://dummyimage.com/300x300/000/fff" title="PHP">
				<ul>
					<li>Laravel</li>
				</ul>
			</card>
			<card img="https://dummyimage.com/300x300/000/fff" title="MySQL"></card>
			<card img="https://dummyimage.com/300x300/000/fff" title="Other">
				<ul>
					<li>Git</li>
					<li>Wordpress</li>
					<li>Adobe Buss</li>
				</ul>
			</card>
		</container>
		<footer>
			<contact></contact>
			<contactForm></contactForm>
		</footer>
	</div>
</template>
<script>
	import topnav from './components/nav/top-nav.vue'
	import eyecat from './components/main-visual.vue'
	import container from './components/container.vue'
	import card from './components/card.vue'
	import contact from './components/contact.vue'
	import contactForm from './components/form.vue'
	export default{
		name: 'app',
		components: {
			topnav,
			eyecat,
			container,
			card,
			contact,
			contactForm
		},
		data() {
			return {
			}
		}
	}
</script>
<style>
	body{
		padding: 0;
		margin: 0;
	}
	footer{
		display: flex;
		justify-content: space-around;
		color: #3f3f3f;
		/*color:#7e7d7d;*/
		background: #f1f0f0;
		padding:2rem;
	}
</style>
