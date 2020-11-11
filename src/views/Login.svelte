<script>
    import LoginForm from "../components/login/LoginForm.svelte";
    import Title from "../components/common/Title.svelte";
    let pageName = 'login';
</script>

<main>
    <h1>{pageName}</h1>
    <Title tabName="Se Connecter" subTitleName=""/>
    <LoginForm />
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