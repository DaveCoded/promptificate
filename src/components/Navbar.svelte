<script lang="ts">
    let path = window.location.href;
    import Logo from "./Logo.svelte";
</script>

<style>
    nav {
        display: flex;
        flex-direction: row;
        justify-content: left;
	    padding: 1.6em;
    }

    nav a {
        padding: 0 10px;
        opacity: 75%;
        transition: all 600ms;
    }

    nav a:hover {
        text-decoration: underline;
        text-decoration-color: #f8b3c7;
        text-decoration-thickness: 0.12em;
        text-underline-offset: 6px;
        opacity: 100%;
    }

    .darkWrapper nav a:hover {
        text-decoration-color: #a684fc;
    }
    .activeNav {
        font-weight: 800;
        text-decoration: underline;
        text-decoration-color: #ea215a;
        text-decoration-thickness: 0.15em;
        text-underline-offset: 4px;
        opacity: 100%;
        transition: all 600ms;
    }

    :global(.darkWrapper) .activeNav {
        text-decoration-color: #319bc9;
    }
</style>

<nav>
    <Logo />
    <a href="/draw" class:activeNav={path.endsWith('/draw')}>Draw</a>
    <a href="/develop" class:activeNav={path.endsWith('/develop')}>Develop</a>
    <a href="/about" class:activeNav={path.endsWith('/about')}>About</a>
</nav>
