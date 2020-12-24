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
