<script lang="ts">
    import type { Mode } from "../types/types";
    import { capitalizeFirstLetter } from "../helpers/utilities";

    export let modes: Mode[];
    export let currentMode = "classic";
    export let switchMode: (mode: Mode) => void;

    let modeNames = modes.map((mode) => capitalizeFirstLetter(mode));
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding: 0px 4px;
        margin: 1em auto;
        border-radius: 30px;
        border: 1px solid #f1eff4;
        background: linear-gradient(180deg, #f5f4f6, #fcfbfc);
    }

    :global(.darkWrapper) .container {
        display: flex;
        justify-content: center;
        max-width: 100%;
        padding: 0px 4px;
        margin: 1em auto;
        border-radius: 30px;
        border: 1px solid #1c1e32;
        background: linear-gradient(0deg, #23253B, #1b1d32);
    }

    button {
        padding: 0.8em 1em;
        border-radius: 30px;
        transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
    }

    .active {
        color: white;
        background: linear-gradient(0deg, #2e58f0, #3195ff);
    }

    :global(.darkWrapper) .active {
        color: white;
        background: linear-gradient(180deg, #8f6ae6, #5e49c7);
    }

    @media (max-width: 724px) {
        .container {
            padding: 0px 2px;
            margin: 0.4em auto;
        }
        button {
            padding: 0.5em 0.7em;
        }
    }
</style>

<div class="container">
    {#each modes as mode, i}
        <button
            class={currentMode === mode ? 'active' : ''}
            on:click={() => switchMode(mode)}>{modeNames[i]}</button>
    {/each}
</div>
