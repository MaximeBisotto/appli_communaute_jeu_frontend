<script>
    import CreateAccountForm from "../components/login/CreateAccountForm.svelte";
    import Title from "../components/common/Title.svelte";
    let pageName = "CreateAccount Page";
</script>

<main>
    <h1>{pageName}</h1>
    <Title tabName="Créer un compte" subTitleName=""/>
    <CreateAccountForm />
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