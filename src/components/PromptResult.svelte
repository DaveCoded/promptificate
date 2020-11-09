<script lang="ts">
    import { fade } from 'svelte/transition'
    import type { Prompt } from '../pages/Draw.svelte'

    export let isReady: boolean
    export let prompt: Prompt

    function togglePromptLock(): void {
        prompt.isLocked = !prompt.isLocked
    }
</script>

{#if isReady}
    <div>
        <h4 transition:fade>{prompt.value}</h4>
        <button on:click={togglePromptLock}>
            {#if prompt.isLocked}Unlock{:else}Lock me{/if}
        </button>
    </div>
{/if}
