<script lang="ts">
    import router from 'page'

    import Drawing from './pages/Drawing.svelte'
    import Dev from './pages/Dev.svelte'
    import About from './pages/About.svelte'
    import NotFound from './pages/NotFound.svelte'

    let page

    router('/', () => (page = Drawing))
    router('/dev', () => (page = Dev))
    router('/about', () => (page = About))
    router('/*', () => (page = NotFound))

    router.start()
</script>

<svelte:component this={page} />
