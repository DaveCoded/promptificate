<script lang="ts">
    import Padlock from './Padlock.svelte';
    export let prompts: any[];
    export let lockPrompt: () => void;
    export let lockChallenge: () => void;

    $: component = prompts && prompts[0].uiComponent;
    $: inspirator = prompts && prompts[0].inspirator;
    $: promptLocked = prompts && prompts[0].isLocked;

    $: challenge = prompts && prompts[1].challenge;
    $: challengeLocked = prompts && prompts[1].isLocked;
    $: console.log('prompts', prompts);
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
        <span>{challenge}</span>
        <button on:click={lockChallenge} class="padlock-button">
            <Padlock width={14} isLocked={challengeLocked} />
        </button>
    </p>
</div>

<style>
    .padlock-button {
        padding: 0;
    }
</style>
