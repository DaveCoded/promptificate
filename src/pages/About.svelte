<script lang="ts">
    import Navbar from "../components/Navbar.svelte";
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

<p>It will provide you with innovative, synergistic, and potentially economically disruptive prompts.</p>
    

<p>
    You have two options – <a href="/draw">Draw</a> or <a href="/develop">Develop</a>.
</p>
    <p>Draw will help you turn silly objects into metaphors for pretentious abstract concepts using a particular visual style. Develop will help you build interface elements inspired by nonsensical memes within a set of design constraints.</p>
<p>You may wish to take all of this seriously. Maybe don't.</p>
<hr />
<p>
    Made by
    <a href="https://www.davebernhard.com/">Dave Bernhard</a>
    and
    <a href="http://maggieappleton.com/">Maggie Appleton</a>.
</p>
<p class="subtext">
    We bear no legal responsibility for your bad drawings or creations in response to our
    potentially offensive prompts.
</p>
