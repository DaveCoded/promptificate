<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let prompts: FixedPrompt[];

    $: component = prompts && prompts[0].result;
    $: inspirator = prompts && prompts[1].result;
    $: challenge = prompts && prompts[2].result;
</script>

<div class="promptResultWrapper">
    <p class="promptResult">
        Create
        <span class="promptVariable">{component}</span>
        inspired by
        <span class="promptVariable">{inspirator}</span>
    </p>
    <p>{challenge}</p>
</div>
