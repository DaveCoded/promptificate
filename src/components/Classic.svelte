<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let prompts: FixedPrompt[];

    $: object = prompts && prompts[0].result;
    $: concept = prompts && prompts[1].result;
</script>

<div class="promptResultWrapper">
    <p class="promptResult">
        Draw
        <span class="promptVariable">{object}</span>
        to illustrate
        <span class="promptVariable">{concept}</span>
    </p>
</div>
