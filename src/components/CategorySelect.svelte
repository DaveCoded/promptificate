<script lang="ts">
    import type { Category } from '../pages/Draw.svelte'

    export let label: string
    export let boundOption: string = ''
    export let categoryOptions: Category[]
</script>

<label for={label} />
<select bind:value={boundOption} id={label}>
    <option value disabled selected>Pick a category</option>
    {#each categoryOptions as categoryOption}
        <option value={categoryOption.value}>{categoryOption.text}</option>
    {/each}
</select>
