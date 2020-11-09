<script lang="ts">
    import { fade } from 'svelte/transition'

    export let isReady: boolean
    export let prompt: string
</script>

{#if isReady}
    <h4 transition:fade>{prompt}</h4>
{/if}
