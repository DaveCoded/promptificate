<script lang="ts">
    import Navbar from "../components/Navbar.svelte";
    import Toggle from "../components/Toggle.svelte";
    import ClassicDev from "../components/ClassicDev.svelte";
    import AdvancedDev from "../components/AdvancedDev.svelte";
    import {
        generateDevAdvanced,
        generateDevClassic,
    } from "../helpers/generateFunctions";

    import type { FixedPrompt, Mode } from "../types/types";
    let mode: Mode = "classic";
    const switchMode = (newMode: Mode) => (mode = newMode);

    let classicPrompts: FixedPrompt[] = generateDevClassic();
    let advancedPrompts: FixedPrompt[] = generateDevAdvanced();
    let generate: () => void;

    $: if (mode === "classic") {
        generate = () => (classicPrompts = generateDevClassic());
    } else if (mode === "advanced") {
        generate = () => (advancedPrompts = generateDevAdvanced());
    }
</script>

<Navbar />

<div class="generator-container">
    <Toggle modes={['classic', 'advanced']} currentMode={mode} {switchMode} />
    {#if mode === 'classic'}
        <ClassicDev prompts={classicPrompts} />
    {:else}
        <AdvancedDev prompts={advancedPrompts} />
    {/if}
    <button class="promptButton" on:click={generate}>Prompt Me!</button>
</div>
