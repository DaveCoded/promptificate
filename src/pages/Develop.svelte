<script lang="ts">
    import Navbar from '../components/Navbar.svelte';
    import Toggle from '../components/Toggle.svelte';
    import ClassicDev from '../components/ClassicDev.svelte';
    import AdvancedDev from '../components/AdvancedDev.svelte';
    import { generateDevAdvanced, generateDevClassic } from '../helpers/generateFunctions';

    import type { FixedPrompt, Mode } from '../types/types';
    let mode: Mode = 'classic';
    const switchMode = (newMode: Mode) => (mode = newMode);

    let classicPrompts: FixedPrompt[] = generateDevClassic();
    let generate: () => void;

    let advancedPrompts: any[] = [
        {
            uiComponent: '',
            inspirator: '',
            isLocked: false
        },
        {
            challenge: '',
            isLocked: false
        }
    ];
    advancedPrompts = generateDevAdvanced(advancedPrompts);

    $: if (mode === 'classic') {
        generate = () => (classicPrompts = generateDevClassic());
    } else if (mode === 'advanced') {
        generate = () => (advancedPrompts = generateDevAdvanced(advancedPrompts));
    }

    const lockPrompt = () => (advancedPrompts[0].isLocked = !advancedPrompts[0].isLocked);
    const lockChallenge = () => (advancedPrompts[1].isLocked = !advancedPrompts[1].isLocked);
</script>

<div class="darkWrapper">

<Navbar />

<div class="generator-container">
    <Toggle modes={['classic', 'advanced']} currentMode={mode} {switchMode} />
    {#if mode === 'classic'}
        <ClassicDev prompts={classicPrompts} />
    {:else}
        <AdvancedDev prompts={advancedPrompts} {lockPrompt} {lockChallenge} />
    {/if}
    <button class="promptButton" on:click={generate}>Prompt Me!</button>
</div>

</div>

<style>
    .darkWrapper {
        width: 100%;
        height: 100vh;
        margin: 0;
        background: linear-gradient(180deg, #2b2e43, #111329);
        color: #5e7d9b;
    }
</style>