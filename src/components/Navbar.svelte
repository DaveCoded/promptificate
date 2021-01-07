<script lang="ts">
    let path = window.location.href;
    import Logo from "./Logo.svelte"
</script>

<style>
nav {
	display: flex;
	flex-direction: row;
	justify-content: left;
	padding-bottom: 1em;
}

nav a {
	padding: 0 10px;
	opacity: 75%;
	transition: all 600ms;
}

nav a:hover {
	text-decoration: underline;
	text-decoration-color: #f8b3c7;
	text-decoration-thickness: .12em;
	text-underline-offset: 6px;
	transition: all 600ms;
	opacity: 100%;
}
    .activeNav {
        text-decoration: underline;
        text-decoration-color: #ea215a;
        text-decoration-thickness: 0.15em;
        text-underline-offset: 4px;
        opacity: 100%;
        transition: all 600ms;
    }

    .rightAlign {
        margin-left: auto;
        color: #71758f;
        font-size: 0.9em;
    }

</style>

<nav>
    <Logo />
        <!-- <a href="/" class:activeNav={path.endsWith('/')}>Home</a> -->
        <!-- <a href="/develop" class:activeNav={path.endsWith('/develop')}>Develop</a> -->
        <a href="/" class:activeNav={path.endsWith('/')}>Draw</a>
        <a href="/about" class:activeNav={path.endsWith('/about')}>About</a> 
        <a class="rightAlign" href="https://github.com/DaveCoded/promptificate/blob/main/src/data/drawPrompts.ts">Contibute prompts</a>
</nav>
