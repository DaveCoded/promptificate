<script lang="ts">
    import type { Category } from "../pages/Draw.svelte";

    export let label: string;
    export let boundOption: string = "";
    export let categoryOptions: Category[];
    export let deletePrompt: () => void;
    export let isLocked: boolean;
</script>

<style>
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

<label for={label} />
<select bind:value={boundOption} id={label}>
    <option value disabled selected>Pick a category</option>
    {#each categoryOptions as categoryOption}
        <option value={categoryOption.value}>{categoryOption.text}</option>
    {/each}
</select>
<button
    on:click={deletePrompt}
    disabled={isLocked}
    class="secondary-button delete-button">Delete</button>
