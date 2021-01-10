<script lang="ts">
    import Navbar from "../components/Navbar.svelte";
    import Toggle from "../components/Toggle.svelte";
    import ClassicDev from "../components/ClassicDev.svelte";
    import AdvancedDev from "../components/AdvancedDev.svelte";

    import type { FixedPrompt, Mode } from "../types/types";
    let mode: Mode = "classic";
    const switchMode = (newMode: Mode) => (mode = newMode);

    let classicPrompts: FixedPrompt[] = [
        { category: "Something", result: "result" },
        { category: "something", result: "something else" },
    ];
    let advancedPrompts: FixedPrompt[] = [
        { category: "Something", result: "result" },
        { category: "something", result: "something else" },
    ];

    let generate = () => console.log("generate");
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
