<script lang="ts">
    import { fade } from 'svelte/transition'

    export let prompt: string
    export let isLocked: boolean
    export let isReady: boolean
    export let lockPrompt: () => void
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
            {prompt}
            <button on:click={lockPrompt} class="prompt-lock">
                {#if isLocked}Unlock{:else}Lock me{/if}
            </button>
        </h4>
    </div>
{/if}
