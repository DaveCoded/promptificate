<script lang="ts">
    let path = window.location.href;
</script>

<style>
    .activeNav {
        text-decoration: underline;
    }
</style>

<nav>
    <a href="/" class:activeNav={path.endsWith('/')}>Home</a>
    <a href="/develop" class:activeNav={path.endsWith('/develop')}>Develop</a>
    <a href="/draw" class:activeNav={path.endsWith('/draw')}>Draw</a>
    <a href="/about" class:activeNav={path.endsWith('/about')}>About</a>
</nav>
