<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let prompts: FixedPrompt[];

    $: object = prompts && prompts[0].result;
    $: concept = prompts && prompts[1].result;
</script>

{#if !prompts}
    <p>Click the button to prompt up yo' life</p>
{:else}
    <p>Draw {object}</p>
    <p>to illustrate {concept}</p>
{/if}
