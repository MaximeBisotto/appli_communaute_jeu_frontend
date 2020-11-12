<script>
    import CreateAccountForm from "../components/login/CreateAccountForm.svelte";
    import Title from "../components/common/Title.svelte";
</script>

<main>
    <div class="container">
        <Title tabName="Créer un compte" subTitleName=""/>
        <CreateAccountForm />
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
            max-width: 30%;
            margin-left: 35%;
            margin-right: 35%;
            border:1px solid black;
            border-radius: 5%;
            padding-top: 5%;
            padding-bottom: 5%;
        }
    }
</style>