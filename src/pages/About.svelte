<script lang="ts">
    import Navbar from "../components/Navbar.svelte";
    import Github from "../components/Github.svelte";
    import Svelte from "../components/Svelte.svelte";
</script>

<style>
    p {
        font-size: 1.2em;
        line-height: 1.6;
        max-width: 500px;
        margin: 0 auto;
        margin: 1em auto;
    }

    hr {
        max-width: 240px;
        margin: 3em auto;
    }

    .subtext {
        color: #9599b3;
        font-size: 1em;
        max-width: 400px;
    }

    a {
        text-decoration: none;
        transition: all 400ms ease-in;
    }
    a:hover {
        text-decoration: underline;
        text-decoration-color: #ea215a;
        text-decoration-thickness: 0.15em;
        text-underline-offset: 4px;
    }
</style>

<Navbar />

<h1>This is a website</h1>

<p>
    It will prompt you to draw silly things as metaphors for abstract concepts.
    If you're feeling advanced, you can draw those things in particular visual
    styles.
</p>
<p>You may wish to take it seriously. Maybe don't.</p>
<hr />
<p>
    Made by
    <a href="https://www.davebernhard.com/">Dave Bernhard</a>
    and
    <a href="http://maggieappleton.com/">Maggie Appleton</a>.
</p>
<p class="subtext">
    We bear no legal responsibility for your bad drawings in response to our
    potentially offensive prompts.
</p>
<p class="subtext"><Github /></p>
