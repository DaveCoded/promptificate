<script lang="ts">
    import { fade } from "svelte/transition";
    import Padlock from "../components/Padlock.svelte";

    export let prompt: string;
    export let isLocked: boolean;
    export let isReady: boolean;
    export let lockPrompt: () => void;
</script>

<style>
    .prompt {
        position: relative;
        padding-left: 22px;
    }

    .padlock-button {
        background-color: transparent;
    }
</style>

{#if isReady}
    <div transition:fade>
        <h4 class="prompt">
            {prompt}
            <button on:click={lockPrompt} class="padlock-button">
                <Padlock width={18} {isLocked} />
            </button>
        </h4>
    </div>
{/if}
