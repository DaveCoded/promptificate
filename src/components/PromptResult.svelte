<script lang="ts">
    import { fade } from 'svelte/transition'
    import type { Mode } from '../types/mode.type'

    export let prompt: string
    export let isLocked: boolean
    export let isReady: boolean
    export let lockPrompt: () => void
    export let deletePrompt: () => void
    export let mode: Mode
</script>

<style>
    .prompt {
        position: relative;
    }

    .secondary-button {
        margin: 0;
        padding: 0.2em 0.4em;
        font-size: 0.6em;
    }

    .prompt-lock {
        color: #333;
        background-color: #ddd;
    }

    .delete-button {
        background-color: #ff3333;
    }

    .delete-button:disabled {
        background-color: #ccc;
    }
</style>

{#if isReady}
    <div transition:fade>
        <h4 class="prompt">
            {prompt}
            {#if mode === 'freestyle'}
                <button on:click={lockPrompt} class="secondary-button prompt-lock">
                    {#if isLocked}Unlock{:else}Lock me{/if}
                </button>
                <button
                    on:click={deletePrompt}
                    disabled={isLocked}
                    class="secondary-button delete-button">Delete</button>
            {/if}
        </h4>
    </div>
{/if}
