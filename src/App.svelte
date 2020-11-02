<script>

	import GameShop from "./components/shop/GameShop.svelte";






</script>

<main>
	<h1>Hello !</h1>

	<input type="text" value="tof"/>

	<button on:click={handleclick}>
		Sned2
	</button>

	<!-- GameShop fonctionnel
	<GameShop/>
	-->
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>