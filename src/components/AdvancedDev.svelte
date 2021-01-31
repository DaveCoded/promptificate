<script lang="ts">
    import Padlock from './Padlock.svelte';
    export let prompts: any[];
    export let lockPrompt: () => void;
    export let lockConstraint: () => void;

    $: component = prompts && prompts[0].uiComponent;
    $: inspirator = prompts && prompts[0].inspirator;
    $: promptLocked = prompts && prompts[0].isLocked;

    $: designConstraint = prompts && prompts[1].designConstraint;
    $: constraintLocked = prompts && prompts[1].isLocked;
</script>

<div class="promptResultWrapper">
    <p class="promptResult">
        Create
        <span class="promptVariable">{component}</span>
        inspired by
        <span class="promptVariable">{inspirator}</span>
        <button on:click={lockPrompt} class="padlock-button">
            <Padlock width={14} isLocked={promptLocked} />
        </button>
        and
        <span>{designConstraint}</span>
        <button on:click={lockConstraint} class="padlock-button">
            <Padlock width={14} isLocked={constraintLocked} />
        </button>
    </p>
</div>

<style>
    .padlock-button {
        padding: 0;
    }
</style>
