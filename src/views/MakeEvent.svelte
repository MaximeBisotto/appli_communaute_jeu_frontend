<script>
    import EventMakeForm from "../components/make_event/EventMakeForm.svelte";
    import Title from "../components/common/Title.svelte";
    let pageName = "Créér événement Page";
</script>

<main>
    <h1>{pageName}</h1>
    <Title tabName="Créer un événement" subTitleName=""/>
    <EventMakeForm />
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
