<script lang="ts">
    import { fade } from "svelte/transition";
    import Padlock from "../components/Padlock.svelte";

    export let prompt: string;
    export let isLocked: boolean;
    export let isReady: boolean;
    export let lockPrompt: () => void;
</script>

<style>
    div.promptContainer {
        align-content: center;
        align-items: center;
        display: inline-flex;
        height: 60px;
    }
    .padlock-button {
        background-color: transparent;
        width: 18px;
        display: inline-block;
    }

    p.promptResult {
        margin: 0;
        padding: 0;
        font-size: 1.4em;
        line-height: 1.3;
        width: 85%;
        display: inline-block;
    }
</style>

{#if isReady}
    <div class="promptContainer" transition:fade>
        <p class="promptResult">{prompt}</p>
        <button on:click={lockPrompt} class="padlock-button">
            <Padlock width={14} {isLocked} />
        </button>
    </div>
{/if}
