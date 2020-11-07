<script lang="ts">
    import router from 'page'

    import Draw from './pages/Draw.svelte'
    import Develop from './pages/Develop.svelte'
    import About from './pages/About.svelte'
    import NotFound from './pages/NotFound.svelte'

    let page

    router('/draw', () => (page = Draw))
    router('/develop', () => (page = Develop))
    router('/about', () => (page = About))
    router('/*', () => (page = NotFound))

    router.start()
</script>

<svelte:component this={page} />
