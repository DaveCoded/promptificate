<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let prompts: FixedPrompt[];

    $: object = prompts && prompts[0].result;
    $: concept = prompts && prompts[1].result;
</script>

<style>



</style>

<div class="promptResult">
{#if !prompts}
    <p>Ummm...click the button, maybe?</p>
{:else}
    <p class="promptResult">Draw {object} to illustrate {concept}</p>
{/if}
</div>
