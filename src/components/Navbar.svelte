<script lang="ts">
    let path = window.location.href;
</script>

<style>
    .activeNav {
        font-weight: 800;
        text-decoration: underline;
        text-decoration-color: #ea215a;
        text-decoration-thickness: 0.15em;
        text-underline-offset: 4px;
        opacity: 100%;
        transition: all 600ms;
    }
</style>

<nav>
    <!-- <a href="/" class:activeNav={path.endsWith('/')}>Home</a> -->
    <!-- <a href="/develop" class:activeNav={path.endsWith('/develop')}>Develop</a> -->
    <a href="/" class:activeNav={path.endsWith('/')}>Draw</a>
    <a href="/about" class:activeNav={path.endsWith('/about')}>About</a>
</nav>
