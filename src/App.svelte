<script>
	import { Router, Route, Link } from "svelte-routing";
	import CreateAccount from "./views/CreateAccount.svelte";
	import Login from "./views/Login.svelte";
	import Shop from "./views/Shop.svelte";
	export let url = "";
	import NewsGameList from "./views/News.svelte";
	import DescriptionGame from "./views/DescriptionGame.svelte";
	import MakeEvent from "./views/MakeEvent.svelte";
</script>

<main>

</main>

<Router url="{url}">
	<nav>
		<Link to="createAccount">CreateAccount</Link>
		<Link to="login">Login</Link>
		<Link to="shop">Shop</Link>
		<Link to="news">Nouveautés</Link>
		<Link to="makeEvent">Créer un événement</Link>
	</nav>
	<div>
		<Route path="login" component="{Login}" />
		<!--for now the router just support case sensitive,
            one workaround colud be add two time the route
            Example.
           <Route path="About" component="{About}" />
        -->
		<Route path="createAccount" component="{CreateAccount}"/>
		<Route path="shop" component="{Shop}"/>
		<Route path="news" component="{NewsGameList}"/>
		<Route path="makeEvent" component="{MakeEvent}"/>
		<Route path="descriptionGame" component="{DescriptionGame}"/>
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
</style>
