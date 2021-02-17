<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let prompts: FixedPrompt[];

    $: object = prompts && prompts[0].result;
    $: concept = prompts && prompts[1].result;
    $: style = prompts && prompts[2].result;
</script>

<div class="promptResultWrapper">
    <p class="promptResult">
        Draw
        <span class="promptVariable object">{object}</span>
        to illustrate
        <span class="promptVariable concept">{concept}</span>
        in the style of
        <span class="promptVariable style">{style}</span>
    </p>
</div>
