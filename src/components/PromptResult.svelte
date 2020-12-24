<script lang="ts">
    import { fade } from "svelte/transition";
    import Padlock from "../components/Padlock.svelte";

    export let prompt: string;
    export let isLocked: boolean;
    export let isReady: boolean;
    export let lockPrompt: () => void;
    export let deletePrompt: () => void;
</script>

<style>
    .prompt {
        position: relative;
        padding-left: 22px;
    }

    .padlock-button {
        background-color: transparent;
    }

    .secondary-button {
        margin: 0;
        padding: 0.2em 0.4em;
        font-size: 0.6em;
    }

    .delete-button {
        background-color: #ff3333;
    }

    .delete-button:disabled {
        background-color: #ccc;
    }
</style>

{#if isReady}
    <div transition:fade>
        <h4 class="prompt">
            {prompt}
            <button on:click={lockPrompt} class="padlock-button">
                <Padlock width={18} {isLocked} />
            </button>
            <button
                on:click={deletePrompt}
                disabled={isLocked}
                class="secondary-button delete-button">Delete</button>
        </h4>
    </div>
{/if}
