<script lang="ts">
    import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<h1>Would you like an inspirational prompt for an <a href="/draw" class="link-animation"><span>illustration</span><svg width="100%" viewBox="0 0 315 5" xmlns="http://www.w3.org/2000/svg"><rect  />
</svg></a> or<br />a <a href="/develop" class="link-animation"><span>UI component</span><svg width="100%" viewBox="0 0 380 5" xmlns="http://www.w3.org/2000/svg"><rect  />
</svg></a>?</h1>

<p>For all other varieties of inspirational prompt, please consult your local Instagram</p>

<style>
    h1 {
        width: 750px;
        max-width: 95%;
        margin: 1em auto;
    }
    p {
        opacity: 60%;
        width: 400px;
        margin: 0 auto;
        line-height: 1.5em;
    }

    .link-animation {
        position: relative;
    }

    a.link-animation:hover {
        text-decoration: none;
    }
    .link-animation svg {
       position: absolute;
       bottom: 2%;
       left: 0;
       fill: #F6386F;
       opacity: 60%;
       transition: all 350ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .link-animation rect {
        height: 2px;
        transition: all 350ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
        width: 100%;
    }

    .link-animation:hover svg {
        transform: translateY(-5px);
        opacity: 100%;
    }

    .link-animation:hover rect {
        height: 4px;
    }
</style>
