<script>
    import GameShop from "../components/shop/GameShop.svelte";
    import Title from "../components/common/Title.svelte";
</script>

<main>
    <Title tabName="Boutique" subTitleName=""/>
    <GameShop/>
</main>

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