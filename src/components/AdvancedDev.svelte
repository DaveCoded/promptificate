<script lang="ts">
    import type { FixedPrompt } from "../types/types";
    export let prompts: FixedPrompt[];

    $: component = prompts && prompts[0].result;
    $: inspirator = prompts && prompts[1].result;
    $: challenge = prompts && prompts[2].result;
</script>

<style>
    .challenge {
        margin: 0.6em;
        font-size: 2rem;
        line-height: 1.5;
    }

    .challenge span {
        font-weight: 700;
        color: #da295b;
    }
</style>

<div class="promptResultWrapper">
    <p class="promptResult">
        Create
        <span class="promptVariable">{component}</span>
        inspired by
        <span class="promptVariable">{inspirator}</span>
    </p>
    <p class="challenge">Challenge: <span>{challenge}</span></p>
</div>
