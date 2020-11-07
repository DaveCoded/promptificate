<script lang="ts">
    import type { Category } from '../pages/Draw.svelte'

    export let label: string
    export let boundOption: string = ''
    export let categories: Category[]
</script>

<label for={label} />
<select bind:value={boundOption} id={label}>
    <option value disabled selected>Pick a category</option>
    {#each categories as category}
        <option value={category.value}>{category.text}</option>
    {/each}
</select>
