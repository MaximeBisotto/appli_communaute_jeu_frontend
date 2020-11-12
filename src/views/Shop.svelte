<script>
    import GameShop from "../components/shop/GameShop.svelte";
    import Title from "../components/common/Title.svelte";
</script>

<main>
    <div class="container">
        <Title tabName="Boutique" subTitleName=""/>
        <GameShop/>
    </div>
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

        .container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            max-width: 40%;
            margin-left: 30%;
            margin-right: 30%;
            border:1px solid black;
            border-radius: 5%;
            padding-top: 5%;
            padding-bottom: 5%;
        }
    }
</style>