<script lang="ts">
    import { fade } from 'svelte/transition'
    import type { Prompt } from '../pages/Draw.svelte'

    export let isReady: boolean
    export let prompt: Prompt

    function togglePromptLock(): void {
        prompt.isLocked = !prompt.isLocked
    }
</script>

<style>
    .prompt {
        position: relative;
    }

    .prompt-lock {
        position: absolute;
        color: #333;
        background-color: #ddd;
        margin: 0;
        padding: 0.2em 0.4em;
        font-size: 0.6em;
        left: 5em;
        top: 0.4em;
    }
</style>

{#if isReady}
    <div transition:fade>
        <h4 class="prompt">
            {prompt.value}
            <button on:click={togglePromptLock} class="prompt-lock">
                {#if prompt.isLocked}Unlock{:else}Lock me{/if}
            </button>
        </h4>
    </div>
{/if}
