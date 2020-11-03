<!-- context="module" is needed to export TS types -->
<script context="module" lang="ts">
    export interface Category {
        value: string
        text: string
    }
</script>

<script lang="ts">
    import CategorySelect from '../components/CategorySelect.svelte'

    let firstOption: string
    let secondOption: string
    let thirdOption: string

    let categories = [
        { value: 'visual-style', text: 'Visual style' },
        { value: 'principal', text: 'Principal' },
        { value: 'object', text: 'Object' },
        { value: 'mood', text: 'Mood' },
        { value: 'abstract-concept', text: 'Abstract concept' }
    ]

    function generate() {
        console.log('generate')
    }
</script>

<nav><a href="/dev">Web dev prompts</a> <a href="/about">About</a></nav>
<h1>Hello from Drawing</h1>

<h2>Categories</h2>

<!-- {categories} is the same as saying categories={categories} -->
<CategorySelect label="first-option" bind:boundOption={firstOption} {categories} />
<CategorySelect label="second-option" bind:boundOption={secondOption} {categories} />
<CategorySelect label="third-option" bind:boundOption={thirdOption} {categories} />

<p>First: {firstOption}</p>
<p>Second: {secondOption}</p>
<p>Third: {thirdOption}</p>

<button on:click={generate}>GO</button>
