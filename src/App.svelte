<script>
	import { Router, Route, Link } from "svelte-routing";
	import CreateAccount from "./views/CreateAccount.svelte";
	import Login from "./views/Login.svelte";
	import Shop from "./views/Shop.svelte";
	export let url = "";
	import NewsGameList from "./views/News.svelte";
	import DescriptionGame from "./views/DescriptionGame.svelte";
	import MakeEvent from "./views/MakeEvent.svelte";
	import listEvent from "./views/listEvent.svelte";

</script>

<main>

</main>

<Router url="{url}">
	<nav class="navContainer">
		<button class="button_type2"><Link class="link" to="createAccount">CreateAccount</Link></button>
		<button class="button_type2"><Link class="link" to="login">Login</Link><br/></button>
		<button class="button_type2"><Link class="link" to="shop">Shop</Link><br/></button>
		<button class="button_type2"><Link class="link" to="news">Nouveautés</Link><br/></button>
		<button class="button_type2"><Link class="link" to="makeEvent">Créer un événement</Link><br/></button>
		<button class="button_type2"><Link class="link" to="listEvent">Lister les événements</Link><br/></button>
	</nav>
	<div>
		<Route path="login" component="{Login}" />
		<Route path="createAccount" component="{CreateAccount}"/>
		<Route path="shop" component="{Shop}"/>
		<Route path="news" component="{NewsGameList}"/>
		<Route path="makeEvent" component="{MakeEvent}"/>
		<Route path="descriptionGame" component="{DescriptionGame}"/>
		<Route path="listEvent" component="{listEvent}"/>
	</div>
</Router>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.navContainer {
		width:50%;
		margin-top: 0;
		margin-right: 25%;
		margin-left: 25%;
		display:flex;
		flex-direction: row;
		justify-content: space-around;
		flex-flow: wrap;
	}

	.button_type2:hover {
		display: inline-block;
		background: #adc5cd;
	}
</style>
