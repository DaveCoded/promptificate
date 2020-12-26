<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let prompts: FixedPrompt[];

    $: object = prompts && prompts[0].result;
    $: concept = prompts && prompts[1].result;
    $: style = prompts && prompts[2].result;
</script>

<div class="promptResult">
{#if !prompts}
    <p>Click the button to prompt up yo' life</p>
{:else}
    <p class="promptResult">Draw {object} to illustrate {concept} in the style of {style}</p>
{/if}
</div>
