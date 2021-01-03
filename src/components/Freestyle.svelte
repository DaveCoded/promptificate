<script lang="ts">
    import CategorySelect from "../components/CategorySelect.svelte";
    import PromptResult from "../components/PromptResult.svelte";
    import type { FreestylePrompt, Mode } from "../types/types";

    interface CategoryOption {
        value: string;
        text: string;
    }

    export let isReady: boolean;
    export let promptsArray: FreestylePrompt[];
    export let categoryOptions: CategoryOption[];
    export let addPrompt: () => void;
    export let deletePrompt: (index: number) => void;
</script>

<style>
    .prompt-container {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 320px;
        height: 100px;
        margin: 0.3em auto;
        padding: 10px;
        background: rgb(255, 255, 255);
        border: 1px solid rgb(228, 232, 237);
        border-radius: 6px;
        box-shadow: 3px 3px 20px rgba(63, 63, 79, 0.01),
            6px 6px 24px rgba(0, 6, 30, 0.09);
    }

    .prompt-container:focus {
        box-shadow: -6px -6px 12px rgb(255, 255, 255),
            1px 1px 12px rgba(63, 63, 79, 0.05),
            3px 3px 18px rgba(0, 6, 30, 0.1);
        outline-color: #3ea5ff;
    }

    .addPrompt {
        align-content: center;
        display: flex;
        max-width: 200px;
        margin: 12px auto 0;
    }

    .addPrompt span {
        color: rgb(152, 156, 187);
        text-align: center;
        position: relative;
        top: 16px;
        padding-right: 8px;
    }

    .addPrompt svg {
        display: block;
        position: relative;
    }
</style>

{#each promptsArray as prompt, i}
    <div class="prompt-container">
        <CategorySelect
            label={prompt + String(i)}
            bind:boundOption={prompt.category}
            {categoryOptions}
            isLocked={prompt.isLocked}
            deletePrompt={() => deletePrompt(i)} />
        {#if prompt.error}
            <p>{prompt.error}</p>
        {:else if prompt.result}
            <PromptResult
                prompt={prompt.result}
                lockPrompt={() => (prompt.isLocked = !prompt.isLocked)}
                {isReady}
                isLocked={prompt.isLocked} />
        {/if}
    </div>
{/each}

<div class="addPrompt">
    <span>Add a prompt</span>
    <button on:click={addPrompt}>
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            tabindex="0"
            aria-hidden="true">
            <circle cx="18" cy="18" r="18" fill="#fff" />
            <rect
                x="8.52637"
                y="20.915"
                width="5.82996"
                height="18.9474"
                transform="rotate(-90 8.52637 20.915)"
                fill="rgb(152, 156, 187)" />
            <rect
                x="21.0317"
                y="27.4738"
                width="6.06316"
                height="18.9474"
                transform="rotate(180 21.0317 27.4738)"
                fill="rgb(152, 156, 187)" />
        </svg>
    </button>
</div>
